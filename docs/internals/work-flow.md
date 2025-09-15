---
sidebar_position: 2
---

# Workflow

This page explains the **lifecycle of an email** inside LSMTPD — from the moment a client connects, to when the message is delivered into AMQP.

![LSMTPD workflow](./img/flow.svg)

---

## 1. Client Connection
- A client (e.g., another mail server) connects to LSMTPD over SMTP.  
- LSMTPD spawns a new **async task** (`tokio::spawn`) to handle this connection.  
- A **180-second timeout** is applied to prevent idle sessions.  

---

## 2. SMTP Handshake
The client and server exchange initial commands:  
- `EHLO` / `HELO` → client introduces itself.  
- Server responds with its configured `SERVER_NAME`.  

---

## 3. Envelope Setup
The client defines sender and recipients:  
- `MAIL FROM:<sender>` → sets the envelope sender.  
- `RCPT TO:<recipient>` → adds one or more recipients.  

---

## 4. Message Transfer
- The client issues the `DATA` command.  
- The server accepts the raw email body until the terminating `.` (dot on a new line).  
- During this stage, LSMTPD enforces:  
  - **Size limits** (reject with `552` if exceeded).  
  - **Basic SMTP formatting**.  

---

## 5. Validation
Before final acceptance:  
- Required fields (`MAIL FROM`, at least one `RCPT TO`, and message body) must be present.  
- If validation fails, LSMTPD responds with the appropriate error code and discards the message.  

---

## 6. Message Queueing
If valid:  
- The message is placed into a **`tokio::mpsc` channel**.  
- A dedicated worker task reads from this channel and prepares the message for AMQP.  

---

## 7. AMQP Delivery
- The worker publishes the email into the configured **AMQP exchange** with the specified `routing_key`.  
- If AMQP is available, delivery is immediate.  
- If AMQP is **unreachable**, the message is temporarily written to:  

```
/tmp/lsmtp/<uuid-v4>.json
```

This ensures **no messages are lost**.  

---

## 8. Connection Close
- Once processing is complete, the client may send `QUIT` to end the session.  
- LSMTPD closes the connection and frees resources.  
