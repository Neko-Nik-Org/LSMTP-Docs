---
sidebar_position: 5
---

# Processing the Email

This section describes the structure and expected content of the email message that is placed in the RabbitMQ queue. When building your own workers, you can use this as a reference to understand the message format and required fields.

:::note
Note that you need to make sure the email size complies with your RabbitMQ configuration limits.
:::


## Email Structure

The email message placed in the queue is represented by the following structure:

```json title="Example of the serialized JSON message"
{
    "timestamp": "2025-09-23T23:18:51.477629045+00:00",
    "message_id": "cf4c844f-a317-44f7-97a3-0aaa5be372e3",
    "client_address": "NEKO-NIK-Example",
    "recipients": ["<admin@nekonik.com>"],
    "email_content": "Email body / DATA part",
    "sender": "from-id@nekonik.org"
}
```

---

## Field Details

Each field in the email message has specific requirements and constraints. Below are the details for each field:

### `timestamp`

The `timestamp` field records the time when the email was created.
It follows the RFC3339 format with nanosecond precision.

Example:

```
2025-09-23T23:18:51.477629045+00:00
```

---

### `message_id`

The `message_id` field uniquely identifies the email.
It is a UUID (version 4) generated at the time of message creation and is used to track the email throughout its processing lifecycle.

Example:

```
cf4c844f-a317-44f7-97a3-0aaa5be372e3
```

---

### `client_address`

The `client_address` field indicates the address or identifier of the SMTP client that submitted the email.
This value usually corresponds to the identifier provided during the `HELO` or `EHLO` phase of the SMTP transaction.

Example:

```
NEKO-NIK-Example
```

---

### `recipients`

The `recipients` field contains a list of all email addresses that will receive the message.
This includes all direct recipients (`TO`, `CC`) as well as any blind carbon copy (`BCC`) recipients, since these are obtained directly from the SMTP `RCPT TO:` commands.

Example:

```
<admin@nekonik.com>
```

---

### `email_content`

The `email_content` field contains the full body of the email, corresponding to the `DATA` section in the SMTP protocol.
This section includes the complete headers (e.g., `Subject`, `From`, `To`, `Date`, `Content-Type`), the message body, and any attachments (encoded as part of a multipart MIME message) as received during the SMTP `DATA` phase.

Example:

```
Subject: Welcome to Neko Nik's LSMTP!
From: from-id@nekonik.org
To: admin@nekonik.com
Date: Tue, 23 Sep 2025 23:18:51 +0000
Content-Type: text/plain; charset="UTF-8"

Hello Admin,

This is a test email sent from the Neko Nik mail system.

Regards,
Neko Nik
```

---

### `sender`

The `sender` field represents the originating email address of the message.

Example:

```
from-id@nekonik.org
```

---

## Validation Rules

The following fields are mandatory for a valid email message:

* `sender`
* `recipients`
* `email_content`

:::danger
Messages missing any of these fields will be rejected and not accepted into the queue.
:::
