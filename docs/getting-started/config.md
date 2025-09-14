---
sidebar_position: 3
---

# Configuration

LSMTPD is configured using **environment variables**.  

- If you installed using `apt install`, a default config file is placed at: `/etc/lsmtpd/lsmtpd.env`. You can edit this file directly.

- If you run LSMTPD from a binary or Docker, export the variables in your shell or pass them via `--env` options.  

---

## Server-Level Configuration

These variables control how the LSMTPD server itself runs.  

### `BIND_ADDRESS`
The IP address the SMTP server will bind to.  
- Use `0.0.0.0` to listen on all interfaces.  
- Use `127.0.0.1` to listen only locally.  

```sh
BIND_ADDRESS=0.0.0.0
```

---

### `BIND_PORT`

The port the SMTP server listens on.

* Default: `25` (standard SMTP).
* If running as a non-root user, use a higher port (e.g. `2525`).

```sh
BIND_PORT=25
```

---

### `SERVER_NAME`

Hostname used by the server for identification in logs and SMTP responses.

```sh
SERVER_NAME=mail.example.com
```

---

### `MAX_EMAIL_SIZE_BYTES`

Maximum allowed size of an incoming email, in bytes.

* Default example below = **50 MB**.

```sh
MAX_EMAIL_SIZE_BYTES=52428800
```

---

## AMQP-Level Configuration

These variables define how LSMTPD connects to your AMQP broker (e.g., RabbitMQ).

### `AMQP_HOST`

Hostname or IP address of the AMQP broker.

```sh
AMQP_HOST=rabbit.example.com
```

---

### `AMQP_PORT`

Port of the AMQP broker.

* Default for AMQP: `5672`.
* Default for AMQP over TLS: `5671`.

```sh
AMQP_PORT=5672
```

---

### `AMQP_USERNAME` and `AMQP_PASSWORD`

Credentials for authenticating with the AMQP broker.

```sh
AMQP_USERNAME=myuser
AMQP_PASSWORD=supersecret
```

---

### `AMQP_VHOST`

AMQP virtual host to use.
If unsure, the default is usually `/`.

```sh
AMQP_VHOST=/
```

---

### `AMQP_EXCHANGE`

Name of the exchange where LSMTPD will publish messages.

```sh
AMQP_EXCHANGE=incoming_emails
```

---

### `AMQP_ROUTING_KEY`

Routing key to use when publishing messages.
This determines which queue(s) receive the email.

```sh
AMQP_ROUTING_KEY=mail.events
```

---

### `AMQP_BUFFER_SIZE`

Maximum number of emails to buffer before sending to the AMQP broker.

* Default: `100`.
* Increase if your broker is slow or if you expect bursty email traffic.

```sh
AMQP_BUFFER_SIZE=100
```

---

## Example Configuration File

Here’s an example `/etc/lsmtpd/lsmtpd.env` file with typical settings:

```sh
# LSMTPD Server Config
BIND_ADDRESS=0.0.0.0
BIND_PORT=25
SERVER_NAME=mail.example.com
MAX_EMAIL_SIZE_BYTES=52428800

# AMQP Broker Config
AMQP_HOST=rabbit.example.com
AMQP_PORT=5672
AMQP_USERNAME=lsmtpd_user
AMQP_PASSWORD=supersecret
AMQP_VHOST=/
AMQP_EXCHANGE=incoming_emails
AMQP_ROUTING_KEY=mail.events
AMQP_BUFFER_SIZE=100
```

---

:::tip
* **Port Binding**: If binding to port 25, LSMTPD may require root or `CAP_NET_BIND_SERVICE`.
* **Security**: Store secrets (like `AMQP_PASSWORD`) in a secure location or a secrets manager.
* **Testing**: Use `telnet` or `swaks` to verify that LSMTPD is listening on the expected address and port.
:::
