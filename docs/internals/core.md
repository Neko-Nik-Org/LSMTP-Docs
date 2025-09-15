---
sidebar_position: 1
---

# Core Architecture

**LSMTPD** is designed to be **lightweight and fast**, with a focus on simplicity and performance.  
Its architecture follows a **modular design**, making it both extensible and easy to reason about.  

---

## Core Components

### 1. Connection Handling
- LSMTPD efficiently manages incoming SMTP client connections.  
- Each connection is handled **asynchronously** using `tokio::spawn`, allowing thousands of concurrent sessions without blocking.  
- A fixed **180-second timeout** ensures idle or stuck connections are closed gracefully.  

---

### 2. Command Processing
LSMTPD parses and responds to standard SMTP commands using a simple state machine.  
Supported commands include:  

- `EHLO` / `HELO` → Greet the server.  
- `MAIL FROM` → Define the sender.  
- `RCPT TO` → Add recipients.  
- `DATA` → Begin message body transfer.  
- `.` (Dot) → End of message body.  
- `QUIT` → Close the connection.  
- `RSET` → Reset the current transaction.  

This minimal but standards-compliant handling ensures interoperability with typical SMTP clients.  

---

### 3. Validations
Basic validations are performed during email processing:  
- **Email size** is checked against `MAX_EMAIL_SIZE_BYTES`. Oversized messages are rejected with SMTP error `552`.  
- **Required fields** (sender, recipients, message body) are verified before the message is accepted for further processing.  

---

### 4. Message Processing
- Incoming messages are **parsed and queued** into an internal `tokio::sync::mpsc` channel.  
- A dedicated worker task consumes messages from this channel and publishes them to the configured **AMQP exchange**.  
- This design provides **backpressure handling**, ensuring the server remains responsive even under load.  

---

### 5. Storage
- By default, LSMTPD is **stateless** and processes messages in memory for maximum speed.  
- If the AMQP broker is **unavailable**, messages are written as JSON files to:  

```
/tmp/lsmtp/<uuid-v4>.json
```

This ensures no email is lost and allows manual recovery later.  
