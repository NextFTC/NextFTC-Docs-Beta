# RGB Indicator

`NextRGBIndicator` wraps a `NextServo` to control the [goBILDA RGB Indicator Light](https://www.gobilda.com/rgb-indicator-light-pwm-controlled/?srsltid=AfmBOoqiCyc1MYNrs92OSLh4GFS5XxRQkp2fo-PEgpbaP64a5LsS1hF_). Different PWM positions correspond to different colors.

## Declarations

:::tabs key:code

== Kotlin
```kotlin
val indicator = NextRGBIndicator("led")
```

== Java
```java
NextRGBIndicator indicator = new NextRGBIndicator("led");
```

:::

## Usage

### Color

Set the color using a preset or a raw PWM value:

:::tabs key:code

== Kotlin
```kotlin
indicator.setColor(NextRGBIndicator.Color.RED)
indicator.setColor(NextRGBIndicator.Color.BLUE)
indicator.off()

// Raw PWM value
indicator.setColor(0.27) // Red
```

== Java
```java
indicator.setColor(NextRGBIndicator.Color.RED);
indicator.setColor(NextRGBIndicator.Color.BLUE);
indicator.off();

// Raw PWM value
indicator.setColor(0.27); // Red
```

:::

Colors: `RED`, `ORANGE`, `YELLOW`, `SAGE`, `GREEN`, `AZURE`, `BLUE`, `INDIGO`, `VIOLET`, `WHITE`.

### Brightness

Scales the PWM range from dimmest (0.0) to brightest (1.0):

:::tabs key:code

== Kotlin
```kotlin
indicator.setBrightness(0.8)
```

== Java
```java
indicator.setBrightness(0.8);
```

:::