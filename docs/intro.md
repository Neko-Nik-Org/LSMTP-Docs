---
sidebar_position: 1
---

# Introduction

Welcome to **LSMTPD** — a lightweight and high-performance SMTP server designed to bridge email and message queues.  

---

## What is LSMTPD?

**LSMTPD** stands for **Lightweight SMTP Daemon**.  
It is a minimalistic SMTP server that accepts incoming email messages and forwards them directly into **AMQP** (Advanced Message Queuing Protocol) systems.  

In practice, this means that instead of having to run a full traditional mail server stack (which can be complex, heavy, and hard to configure), you can deploy LSMTPD to **receive mail over SMTP and deliver it straight into your existing message queue**.  

This makes it extremely useful for applications that:  
- Need to process incoming emails as events.  
- Require email integration inside distributed systems or microservices.  
- Want a clean and reliable way to move email data into message-driven workflows.  

---

## Why does LSMTPD exist?

Traditional mail transfer agents (MTAs) like Postfix or Exim are extremely powerful and flexible, but they are also:  
- Heavy and complex to configure.  
- Designed for full mail delivery and relay, not lightweight forwarding.  
- Overkill when all you need is *"receive an email and push it into a queue."*  

**LSMTPD was created to solve exactly that problem.**  
It focuses on a **single responsibility**: acting as a **bridge between SMTP and AMQP**, without unnecessary features or overhead.  

By narrowing its scope, LSMTPD can offer:  
- A **simpler configuration** compared to traditional MTAs.  
- **Lower resource usage**, making it suitable for containerized or serverless environments.  
- **More predictable behavior**, since it is purpose-built for one job.  

---

## Why use LSMTPD?

There are several reasons why LSMTPD stands out as a solution for modern systems:

### 1. Lightweight and Efficient
LSMTPD has been designed to be minimal. It doesn’t attempt to replicate a full mail server stack — it does one thing, and does it well: **receive mail and forward to AMQP.**  
This makes it ideal for microservices, event-driven systems, and cloud-native deployments where efficiency and simplicity matter.

### 2. Seamless AMQP Integration
Because it directly integrates with **AMQP**, LSMTPD allows you to plug email data into your existing messaging infrastructure.  
That means you can process emails the same way you handle other events, jobs, or messages — with the same queues, consumers, and workflows you already rely on.

### 3. Reliability and Safety
Built in **Rust**, LSMTPD benefits from Rust’s guarantees around memory safety and concurrency.  
This makes the server robust, secure, and performant under load. It is designed with production use in mind and can handle real-world email traffic reliably.

### 4. Open Source and Transparent
LSMTPD is fully open source and licensed under **GPL-3.0**.  
This ensures that you:  
- Have full access to the source code.  
- Can audit it for security and reliability.  
- Are free to extend or contribute improvements back to the project.  

👉 Source code: [github.com/Neko-Nik/LSMTP](https://github.com/Neko-Nik/LSMTP)  

---

## When should you use LSMTPD?

LSMTPD is the right tool for you if:  
- You need to **capture incoming emails** and feed them into an event-driven system.  
- You’re building **automation workflows** that respond to email messages.  
- You want a **simple, minimal alternative** to a full mail server.  
- You’re working with **AMQP-based systems** and want a direct email → queue pipeline.  

If you need advanced mail features (mail storage, spam filtering, outbound relay, virtual domains, etc.), then a traditional MTA is a better choice. But if your goal is *just to forward incoming emails into a queue*, LSMTPD is designed for that exact purpose.  

---

## Summary

**LSMTPD** is a purpose-built, open source SMTP server that:  
- Accepts emails over SMTP.  
- Forwards them directly into AMQP queues.  
- Is fast, minimal, and reliable thanks to Rust.  
- Provides a simple way to integrate email into modern distributed systems.  

It strips away the complexity of traditional mail servers, leaving you with a clean and efficient solution for email-to-message-queue pipelines.  
