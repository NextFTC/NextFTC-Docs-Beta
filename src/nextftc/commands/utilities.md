# Utilities

NextFTC has a bunch of utility commands to help you simplify your code!

## Instant Commands

An `InstantCommand` runs a function and ends instantly.
The `instant` utility function can be used to create an `InstantCommand`.

:::tabs key:code
== Kotlin

```kotlin
instant("name") {
    // code here
}

// or 

instant {
    // code here
}
```

== Java

```java
instant("name", () -> {
    // code here
})

// or

instant(() -> {
    // code here
});
```

:::

## Run Commands

A run command is similar to an `InstantCommand`, but it runs continuously until it is interrupted.
There is no specific `RunCommand` class; 
instead, the `run` utility function can be used to create a run command.

:::tabs key:code

== Kotlin
```kotlin
run("name") {
    // code here
} 

// or

run {
    // code here
}
```

== Java
```java
run("name", () -> {
    // code here
});

// or

run(() -> {
    // code here
});
```

:::

## `NullCommand`

A `NullCommand` is a placeholder command that does nothing. It can take an arbitrary amount of parameters when used as a placeholder for another command.

:::tabs key:code
== Kotlin

```kotlin
NullCommand(parameter1, parameter2)
```

== Java

```java
new NullCommand(parameter1, parameter2)
```

:::

## `proxy`

A proxy command schedules another command and instantly ends. 
This can be useful in `SequentialGroups` where you want to start a command and move on.

:::tabs key:code
== Kotlin

```kotlin
proxy(command)
```

== Java

```java
proxy(command)
```

:::

Alternatively, you can used the `.asProxy()` utility:

:::tabs key:code

== Kotlin

```kotlin
command.asProxy()
```

== Java

```java
command.asProxy()
```

:::

## `repeatedly`

The `repeatedly` decorator can be used to create a command that runs until it is interrupted or stopped, 
repeatedly executing a given block of code.

If `isDone` is true, the command will restart, causing `start` to be called again.
This will happen infinitely until the command is interrupted,
or stopped as part of a `ParallelRaceGroup` or `ParallelDeadlineGroup`.

::: tabs key:code

== Kotlin
```kotlin
command.repeatedly()
```

== Java
```java
command.repeatedly();
```

::: 

## `until`

The `until` decorator can be used to create a command that runs until a given condition is true.

::: tabs key:code

== Kotlin
```kotlin
command.until { /* condition */ }
```

== Java
```java
command.until(() -> { /* condition */ });
```

:::

