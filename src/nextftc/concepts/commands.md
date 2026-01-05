# Commands

_Why use commands?_ Commands allow you to **organize your code** much more
efficiently than you could otherwise. They are an excellent alternative
to [finite state machines](https://gm0.org/en/latest/docs/software/concepts/finite-state-machines.html),
are a lot easier to create and modify, and can reach higher levels of complexity
than a finite state machine can.

## Parts of a Command

A command has four main components: `isDone`, `start`, `update`, and `stop`.

- `isDone` is checked every loop. If it ever evaluates to `true`, the command
  will stop running.
- `start` is run once, when the command is scheduled. It is used for setting up
  starting states and doing other things that should only happen once.
- `update` runs every loop, many times per second. Because of this, it is
  crucial that it never takes more than a trivial amount of time to execute. You
  should be extremely careful of looping or doing anything else that could take
  significant amounts of time
- `stop` runs once when the command ends, and receives a parameter of
  whether it was interrupted by a different command.

Additionally, it has two more properties:

- `interruptible` determines whether the command is able to be
  interrupted. A command is interrupted when another command is scheduled that
  requires a subsystem the command is using. If a command is not interruptible,
  then the new command will not run.
- `requirements` is a set of all the requirements a command has. This is
  used to determine when two commands require the same resource.
- `name` is a string that is used to identify the command. By default, it is the
  class name of the command, but it can be set to anything. More information
  on command naming and debugging can be found later on this page.

## Executing Commands

There are two ways to schedule a command. You can either call:

:::tabs key:code
== Kotlin

```kotlin
val myCommand = MyCommand() // Or a LambdaCommand
CommandManager.scheduleCommand(myCommand)
```

== Java

```java
Command myCommand = new MyCommand(); // Or a LambdaCommand
CommandManager.INSTANCE.scheduleCommand(myCommand);
```

:::

Or just:

:::tabs key:code
== Kotlin

```kotlin
val myCommand = MyCommand() // Or a LambdaCommand
myCommand()
```

== Java

```java
Command myCommand = new MyCommand(); // Or a LambdaCommand
myCommand.schedule();
```

:::

## Debugging Commands

When working with commands, it can be helpful to have some debugging information 
to understand what is happening during their execution,
especially when writing custom commands or using custom end conditions.

Here are some tips for debugging commands in NextFTC:
- **Set Command Names**: When creating commands, use the `named` method to give
  your commands meaningful names. This makes it easier to identify them in telemetry.
- **Use Telemetry**: You can add telemetry data in the `start`, `update`, and `stop`
  methods of your commands to track their execution. For example, you can log when
  a command starts, updates, and stops, along with any relevant state information,
  using `ActiveOpMode.telemetry`.
- **Use Snapshots**: You can output snapshots of the command state at any point using
  `CommandManager.snapshot`, which can be printed to telemetry in an OpMode,
  logged using a framework of your choice, or displayed on a dashboard
  such as FTC Dashboard or Panels.
