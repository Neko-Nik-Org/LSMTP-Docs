---
sidebar_position: 2
---

# Practical Applications

LSMTPD isn’t meant to replace a full-featured mail server — it focuses on doing one job well: **receiving mail and forwarding it to AMQP.**  
This makes it a great fit for systems where **email acts as an input signal** or **trigger for workflows.**

Below are some common ways(use cases) you can use LSMTPD in production.

## 1. Event-Driven Email Processing
Instead of storing emails locally or passing them through complex pipelines, LSMTPD forwards them directly into your message broker.  
This makes it simple to build workflows such as:  
- Automatically creating support tickets from incoming emails.  
- Triggering CI/CD jobs when specific emails are received.  
- Feeding emails into spam-detection or filtering services.  


## 2. Cloud-Native and Microservices Architectures
Traditional MTAs are heavy and not always a good fit for **containerized or serverless environments**.  
LSMTPD’s minimal footprint makes it easy to:  
- Deploy alongside your microservices.  
- Scale horizontally with your AMQP infrastructure.  
- Run reliably in Docker, Kubernetes, or lightweight VMs.  


## 3. Bridging Legacy Systems
Many older tools and external services still communicate via **SMTP**.  
LSMTPD lets you connect those legacy systems to your modern event-driven stack by forwarding messages straight into a queue, where they can be consumed by modern applications.  


## 4. Workflow Automation
By turning emails into **queue messages**, you can use LSMTPD to automate workflows such as:  
- Order confirmations → Queue → Processed by billing system.  
- Email alerts → Queue → Pushed to monitoring dashboards.  
- Form submissions → Queue → Stored in a database or CRM.  


## 5. Simple, Reliable Mail Ingestion
For applications that only need to **ingest incoming mail** (not send outbound mail, host mailboxes, or manage users), LSMTPD provides a much simpler alternative to running and maintaining Postfix, Exim, or Sendmail.  

---

## When *Not* to Use LSMTPD
LSMTPD is **not** a full MTA.  
If you need advanced email features like:  
- Outbound mail delivery.  
- Virtual domains and aliases.  
- Mailbox storage and IMAP/POP3 access.  
- Built-in spam filtering.  

…then a traditional mail server is a better fit.  

---

## Summary
Use LSMTPD when you want:  
- A **minimal, fast, and reliable** way to receive emails.  
- Direct **integration with AMQP** queues.  
- You need to **capture incoming emails** and feed them into an event-driven system.
- You’re building **automation workflows** that respond to email messages.
- You want a **simple, minimal alternative** to a full mail server.
- You’re working with **AMQP-based systems** and want a direct email → queue pipeline.

Avoid LSMTPD when you need the full flexibility of a traditional mail server.  
