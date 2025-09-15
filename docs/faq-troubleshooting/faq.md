---
sidebar_position: 1
---

# Common Questions

Here are some common questions and answers about **LSMTPD**.

---

### ❓ What is LSMTPD?
LSMTPD (**Lightweight SMTP Daemon**) is a minimal SMTP server written in Rust.  
It receives email over SMTP and forwards it directly into an AMQP queue or exchange.  

---

### ❓ Why should I use LSMTPD instead of Postfix or Exim?
Traditional MTAs (Postfix, Exim, Sendmail) are powerful but heavy.  
If all you need is **“receive an email → push it into AMQP”**, LSMTPD is:  
- Lighter.  
- Easier to configure.  
- More predictable in containerized or microservice environments.  

Use Postfix/Exim if you need advanced features (mail storage, outbound relay, spam filtering).  

---

### ❓ Can LSMTPD send outbound mail?
No. LSMTPD is **receive-only**.  
It is intentionally designed for one purpose: ingesting mail and forwarding it to AMQP.  

---

### ❓ What AMQP brokers are supported?
Any broker that implements **AMQP 0.9.1** or **AMQP 1.0** should work.  
- ✅ Tested with **RabbitMQ**.  
- ✅ Likely works with Apache Qpid and others.  

---

### ❓ How do I configure LSMTPD?
Configuration is done via **environment variables** (or `/etc/lsmtpd/lsmtpd.env` on Debian installs).  
See the [Configuration Guide](../getting-started/config.md) for details.  

---

### ❓ What ports does LSMTPD use?
- Default SMTP: **25** (or `2525` if running unprivileged).  
- AMQP: **5672** (default) or **5671** (TLS).  

---

### ❓ How do I verify LSMTPD is running?
You can test with:  

```bash
telnet localhost 25
````

or using [swaks](https://www.jetmore.org/john/code/swaks/):

```bash
swaks --server localhost --helo test --from test@example.com --to inbox@example.com
```

---

### ❓ What license is LSMTPD under?

LSMTPD is licensed under **GPL-3.0**.
You are free to use, inspect, and contribute.

👉 Source code: [github.com/Neko-Nik/LSMTP](https://github.com/Neko-Nik/LSMTP)

---

### ❓ Who maintains LSMTPD?

LSMTPD is developed and maintained by [Neko Nik](https://www.nekonik.com/impressum).
