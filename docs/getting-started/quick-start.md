---
sidebar_position: 2
---

# Quick Start

Getting started with **LSMTPD** is simple.  
You can install it in two ways:  

1. Using our **official Debian APT repository** (recommended).  
2. [Building from source](./build.md) with Cargo.  

:::tip Coming Soon
We will soon provide a Docker image for easier deployment. With a sample `docker-compose.yml` file to get you started.
:::

---

## Install via APT (Recommended)

Our official APT repository is hosted at: https://apt.nekonik.com

### Step 1: Add the Repository
Follow the instructions on [apt.nekonik.com](https://apt.nekonik.com) to add the repository to your system.  

### Step 2: Update & Install

Run the following commands:  

```bash
sudo apt update
sudo apt install lsmtpd
```

During installation, you may be prompted to configure initial settings.

* If prompts appear, fill them out accordingly.
* If you see no prompts, don’t worry — you can always edit the configuration later.

### Step 3: Configure the Service (Optional)

If you got prompted during installation, you can skip this step.

The main configuration file is located at:

```
/etc/default/lsmtpd
```

You can adjust environment variables here to suit your setup.
For details, see the [Configuration Guide](./config.md).

### Step 4: Start and Verify

Enable and start the service:

```bash
sudo systemctl start lsmtpd
sudo systemctl status lsmtpd
```

If everything is working, you should see **LSMTPD running** and ready to accept connections.

---

## Alternative: Build from Source

If you prefer to build manually or want the latest development version, see:
👉 [Build from Source](./build.md)
