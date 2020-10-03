# XStore CLI
This CLI lets you develop clients, or use the CLI directly.

## Available commands

```xstore version```

- Returns the current XStore CLI version installed in your system.

## In development commands

```xstore publish```

- Publishes the CWD to our servers. 

### Arguments

`--platform=windows|linux|android|uwp`

Publishes the current CWD to a certain platform. Defaults to manifest's main extension.

For example, if your main is a .APK, the target'll be Android.

### Additional notes

- This command is only available for trusted apps that have been tested. 
- Note that you can't publish a entirely different binary. If you need to do it, contact us.
- 

## About CD

We have planned to do Continous Delivery.

## About Apple

We currently don't publish apps for MacOS since we would be breaking a lot of laws. This could change in the future.