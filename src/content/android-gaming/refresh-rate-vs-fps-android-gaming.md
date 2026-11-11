---
title: "60Hz vs 90Hz vs 120Hz: What Android Gamers Need to Know"
description: "Understand the difference between screen refresh rate and game FPS, how Android handles higher refresh rates, and when 90Hz or 120Hz actually makes a difference."
section: android-gaming
contentType: technology-explainer
tags:
  - refresh rate
  - FPS
  - 60Hz
  - 90Hz
  - 120Hz
  - Android gaming
authorId: tgg-hub
testingDisclosure: "Research-based technical explainer using Android Developers documentation. No device-specific refresh-rate measurements or hands-on game tests are claimed. Actual refresh rates and game frame-rate support vary by hardware, software and individual game."
sources:
  - https://developer.android.com/games/optimize/display-refresh-rate-change
  - https://developer.android.com/games/optimize/power
  - https://developer.android.com/games/optimize/framerate
  - https://developer.android.com/games/optimize/adpf/gamemode/gamemode-api
status: draft
---

# 60Hz vs 90Hz vs 120Hz: What Android Gamers Need to Know

You see a smartphone advertised with a 120Hz display.

Another phone has 90Hz, while an older or more affordable model uses 60Hz.

It is tempting to assume that the phone with the highest number will automatically deliver the best gaming experience.

That is not necessarily true.

A display's refresh rate and a game's frame rate are related, but they are not the same thing.

Understanding the difference helps you avoid unrealistic expectations, choose appropriate settings and make better use of your device.

## 1. What is refresh rate?

Refresh rate describes how frequently a display updates its image.

It is measured in Hertz (Hz).

A 60Hz display can refresh 60 times per second.

A 90Hz display can refresh 90 times per second.

A 120Hz display can refresh 120 times per second.

In general, a higher refresh rate allows the screen to display more frequent visual updates when the content and hardware support them.

This can make supported gameplay and ordinary interface movement appear smoother.

However, the display's refresh rate alone does not determine how many new frames a game produces.

## 2. What is FPS?

FPS means frames per second.

It describes how many frames the game renders or outputs during each second.

For example:

- 30 FPS means approximately 30 frames each second.
- 60 FPS means approximately 60 frames each second.
- 90 FPS means approximately 90 frames each second.
- 120 FPS means approximately 120 frames each second.

A game's actual frame rate depends on its own rendering workload, frame-rate settings, device hardware, software support and current operating conditions.

A phone can have a 120Hz display while a particular game runs at 30 or 60 FPS.

That is not automatically a fault.

The game may simply have a lower frame-rate target or limit.

## 3. Refresh rate and FPS compared

The following table shows the maximum refresh opportunities provided by each display under the stated configuration.

| Display | Refreshes per second | Approximate refresh interval |
| --- | ---: | ---: |
| 60Hz | 60 | 16.67ms |
| 90Hz | 90 | 11.11ms |
| 120Hz | 120 | 8.33ms |

These numbers describe the display, not a guarantee that the game produces a matching number of unique frames.

Consider two examples.

### Example A: 120Hz screen with a 60 FPS game

The display can refresh 120 times per second, but the game produces approximately 60 frames per second.

The same game frame may therefore remain visible across more than one display refresh.

The display specification has not turned the game into a 120 FPS experience.

### Example B: 120Hz screen with a game supporting 120 FPS

When the game, device, operating system and current conditions all support the higher frame rate, the display may show more frequent game updates.

Movement can look smoother and the interval between new frames can be shorter.

However, maintaining that experience requires additional rendering work and may increase power consumption.

## 4. Does a 120Hz phone guarantee 120 FPS?

No.

Several conditions must align.

### The display must support the refresh rate

A phone limited to 60Hz cannot display 120 separate refresh cycles per second.

A higher display specification is a hardware requirement for taking advantage of a higher refresh rate.

### The game must support the frame rate

The game itself must provide an appropriate frame-rate option or request the relevant display behaviour.

Some games have fixed frame-rate limits.

Others provide multiple options depending on hardware and software compatibility.

### The operating system must permit the mode

Android can manage refresh-rate requests rather than blindly accepting every requested setting.

Android Developers documents that Android 15 sets a default 60Hz refresh rate for games to help optimise power consumption.

Games can explicitly request higher frame rates through the Frame Rate API or the Swappy library.

The system may still override a higher-rate request depending on conditions such as battery level or device temperature.

This is important: a user cannot assume that switching on a 120Hz display setting will force every game to render at 120 FPS.

Read the official [Android refresh-rate optimisation documentation](https://developer.android.com/games/optimize/display-refresh-rate-change).

## 5. How to check your phone's refresh rate

The exact menu depends on your manufacturer and Android version.

A common route is:

1. Open Settings.
2. Select Display.
3. Look for a setting such as Screen refresh rate, Motion smoothness or Smooth display.
4. Check whether the available options include 60Hz, 90Hz, 120Hz or an adaptive mode.

Some phones select the refresh rate automatically.

Others provide a manual choice.

A displayed 120Hz option confirms the supported display mode, not the FPS of every installed game.

## 6. How to check a game's FPS support

Start with the game itself.

1. Open the game's settings.
2. Look for Graphics, Display or Performance.
3. Check the available frame-rate options.
4. Select a supported option.
5. Observe whether the game maintains consistent performance.

Some devices also provide gaming overlays with FPS counters.

The exact availability of these features depends on the manufacturer and software.

A counter can help distinguish a game that is running at a stable lower frame rate from one whose performance frequently drops.

Do not rely on unsupported third-party FPS unlockers to force a frame rate the game or device does not support.

## 7. Should you use 60Hz, 90Hz or 120Hz for gaming?

It depends on the game and your priorities.

### Choose 60Hz when:

- Your games primarily run at 60 FPS or below.
- Battery life is more important than extra display refreshes.
- Your device becomes warm during demanding sessions.
- You want to avoid unnecessary display power consumption.

### Consider 90Hz when:

- Your device supports it.
- Your game can benefit from a higher frame rate.
- You can maintain stable gameplay.
- You want a balance between smoothness and power consumption.

### Consider 120Hz when:

- Your display supports it.
- Your game explicitly supports a higher frame rate.
- Your device can maintain that workload.
- Battery consumption and heat remain acceptable.

These are practical starting points, not universal performance settings.

## 8. Does a higher refresh rate affect battery life?

It can.

The display is one of the components that consumes energy during normal smartphone use.

Android Developers explains that higher refresh rates generally increase display power consumption.

Games targeting higher frame rates may also demand more work from the CPU and GPU.

That creates a trade-off between visual smoothness, power consumption and thermal behaviour.

A 120Hz setting is therefore not automatically the best choice for a long gaming session.

For more information, read [Android's power-efficiency guidance](https://developer.android.com/games/optimize/power).

## 9. What about adaptive refresh rates?

Some smartphones offer adaptive refresh-rate behaviour.

Instead of remaining at one refresh rate all the time, the display may adjust its behaviour according to the current content and system policy.

For example, the phone may use a higher refresh rate during supported interactions and reduce it when a higher rate is unnecessary.

The exact behaviour differs by manufacturer and model.

Adaptive refresh rate does not guarantee that every game will receive its highest possible FPS.

The game and operating system still determine what is available.

## 10. What should budget and mid-range Android gamers prioritise?

Do not purchase a phone simply because its marketing material advertises 120Hz.

A balanced device with reliable sustained performance can provide a better experience than a phone with a higher refresh-rate specification but insufficient processing capability for demanding games.

When considering a gaming device, examine:

- Processor and graphics performance.
- Available memory.
- Game-specific compatibility.
- Sustained thermal behaviour.
- Battery capacity and power management.
- Supported game frame rates.
- Display refresh-rate capabilities.

The display is only one part of the complete gaming experience.

## Final thoughts

Refresh rate describes the display's update capability. FPS describes the game's frame output.

They work together, but one does not guarantee the other.

A 120Hz display is useful when the game and device can take advantage of it. Otherwise, a stable 60 FPS experience can be more enjoyable than an unstable attempt to reach a higher target.

Choose the configuration that your device can actually sustain.