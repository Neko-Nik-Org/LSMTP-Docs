---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **LSMTPD in less than 5 minutes**.

## What is LSMTPD?

LSMTPD is a lightweight SMTP server designed to integrate seamlessly with AMQP workflows. It allows you to receive emails over SMTP and deliver them directly into your messaging system.

Abbreviation of LSMTPD is "Lightweight SMTP Daemon".

Its written in Rust for performance and reliability. With full source code available.

Its battle-tested and designed for production use.


### What you'll need

- For Debian based systems, we recommend installing using `apt`
    - To add our repository, run the following command: `curl -sSf https://apt.nekonik.com/install.sh | sh` . Read more on our Repo at [apt.nekonik.com](https://apt.nekonik.com)
    - Next install it using `apt install lsmtpd`

## Why use LSMTPD?

- **Lightweight**: LSMTPD is designed to be lightweight and efficient, making it ideal for microservices and cloud-native applications.
- **Seamless Integration**: It integrates easily with existing AMQP workflows, allowing you to leverage your current messaging infrastructure.
- **Reliability**: Built with Rust, LSMTPD offers strong performance and reliability guarantees, ensuring your email processing is robust and fault-tolerant.
- **Open Source**: LSMTPD is open source, giving you the freedom to inspect, modify, and contribute to the codebase.

Code (Software): Licensed under GPL-3.0 at https://github.com/Neko-Nik/LSMTP
