---
sidebar_position: 4
---

# Build from Source

If you prefer to build **LSMTPD** from source, you can do so easily using the Rust toolchain.  
This is useful if you want to:  
- Run the latest development version.  
- Contribute to the project.  
- Customize or experiment with the code.  

---

## Prerequisites

- **Rust toolchain**: Install Rust from [https://www.rust-lang.org](https://www.rust-lang.org)

- **Git**: Install Git if not already installed, based on your OS.

- **2 GB Space**: Ensure you have at least 2 GB of free disk space.

:::info
Final executable will be located in `target/release/lsmtpd` with around `6.5MB` binary size.
:::

---

## Clone the Repository

Clone the official repository from GitHub:

```sh
git clone https://github.com/Neko-Nik/LSMTP.git
cd LSMTP
```

---

## Build the Binary

Compile in **release mode** for best performance:

```sh
cargo build -r
```

After compilation, the binary will be located at:

```
target/release/lsmtpd
```

---

## Running the Server

You can run the server directly:

```sh
./target/release/lsmtpd
```

:::warning
LSMTPD will read configuration from environment variables only and not from file, so export all the required variables as such.
:::
