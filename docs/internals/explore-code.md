---
sidebar_position: 3
---

# Explore Code

This page gives a quick overview of the **LSMTPD repository structure** so contributors can navigate the codebase easily.  

---

## Repository Layout

```
LSMTP/
├── Cargo.toml          # Project manifest (dependencies, metadata)
├── Cargo.lock          # Lock file for reproducible builds
├── LICENSE             # GPL-3.0 license
├── README.md           # Project readme
├── LSMTP-Paper.pdf     # Technical paper / reference
├── packages/           # Prebuilt Debian/ARM64 packages with service files
└── src/                # Main source code
```

---

## Source Code (`src/`)

```
src/
├── main.rs             # Entry point, starts the LSMTPD server
├── amqp.rs             # AMQP connection & publishing logic
├── prelude.rs          # Common imports and helper traits
├── state.rs            # Shared application state
├── types.rs            # Custom types and structs
└── handler/            # SMTP handling logic
├── mod.rs          # Module entry for handler
├── email.rs        # Email representation & validation
├── parsing.rs      # SMTP command parsing
```

---

## Packaging (`packages/`)

```
packages/
├── lsmtpd\_1.1.0-4\_amd64/   # Debian package (x86\_64 build)
└── lsmtpd\_1.1.0-5\_arm64/   # Debian package (ARM64 build)
```

Each package includes:  
- `DEBIAN/` → control metadata & scripts (`postinst`, `prerm`, etc.)  
- `lib/systemd/system/lsmtpd.service` → systemd unit file  
- `usr/bin/lsmtpd` → compiled binary  

---

## Summary

- **`src/`** → core implementation (SMTP handling, AMQP integration).  
- **`packages/`** → Debian/ARM64 prebuilt packages with service configs.  
- **Top-level files** → metadata, license, docs, build definitions.  

This modular layout keeps the project clean: **code in `src/`, builds in `packages/`, docs in a separate repo**.  
