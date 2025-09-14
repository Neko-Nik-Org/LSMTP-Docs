---
sidebar_position: 1
---

# Prerequisites

Before you install and run **LSMTPD**, make sure your environment meets the basic requirements.  
This ensures that the server can run smoothly and integrate correctly with your existing infrastructure.  

---

## System Requirements

- **Operating System**:  
  - Linux (Debian/Ubuntu recommended for packaged install).  
  - Other Linux distributions supported via Docker or source build.  

- **Architecture**:  
  - x86_64 (amd64).  
  - ARM64 (supported via Docker and source build).  

- **Memory / CPU**:  
  - Very lightweight — runs comfortably in **128MB RAM / 1 vCPU** environments.  
  - Scales efficiently with additional resources.  

---

## Software Requirements

- **AMQP Broker**  
  LSMTPD requires an **AMQP-compatible message broker** (e.g., [RabbitMQ](https://www.rabbitmq.com/), [Apache Qpid](https://qpid.apache.org/), or any AMQP 0.9.1/1.0 compliant broker).  
  - Make sure your broker is installed, running, and reachable.  
  - Have a **queue** or **exchange** ready to receive messages.  

- **Rust toolchain (only if building from source)**  
  - If you plan to build from source, you’ll need [Rust](https://www.rust-lang.org/tools/install) (latest stable release).  
  - Building is not required if you use the Debian package or Docker image.  

---

## Network & Security Requirements

- **SMTP Port Access**  
  - By default, LSMTPD listens on **port 25** (standard SMTP).  
  - If running as a non-root user, you may configure it to use a higher port (e.g., 2525).  

- **Firewall Rules**  
  - Allow inbound SMTP traffic on the chosen port.  
  - Ensure outbound connectivity to your AMQP broker (typically port 5672 or 5671 for TLS).  

- **User Permissions**  
  - If binding to port 25, LSMTPD may need root privileges or systemd capabilities (`CAP_NET_BIND_SERVICE`).  

---

## Recommended Knowledge

Before using LSMTPD, you should be familiar with:  
- **Basic SMTP concepts**: how email clients connect and send mail.  
- **AMQP fundamentals**: queues, exchanges, and routing.  
- **System administration basics**: configuring services, opening firewall ports, and using logs.  

---

## Next Steps

Once your environment is ready, continue to the next page to install LSMTPD via **Debian package**, **Docker**, or **source build**.
