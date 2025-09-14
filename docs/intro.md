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

## Summary

**LSMTPD** is a purpose-built, open source SMTP server that:  
- Accepts emails over SMTP.  
- Forwards them directly into AMQP queues.  
- Is fast, minimal, and reliable thanks to Rust.  
- Provides a simple way to integrate email into modern distributed systems.  

It strips away the complexity of traditional mail servers, leaving you with a clean and efficient solution for email-to-message-queue pipelines.  
