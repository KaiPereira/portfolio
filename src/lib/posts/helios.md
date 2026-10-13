---
title: Making a solar-powered LoRaWAN weather station from scratch
date: "2026-10-04"
description: This is my entire journey of making my own solar-powered, low-power, STM32 LoRaWAN weather station from scratch for compiling fun data for my website
disabled: true
---
# Making a solar-powered LoRaWAN weather station

[image]

I've just finished setting up a LoRa network to compile all the weather data around Burlington, Vermont and this is my entire process of designing this system from creating my own PCBs to programming, debug and uplink. 

I first started this project about 6 months ago after finishing up some [hackathon badges](https://github.com/KaiPereira/Overglade-Badges) I had made for an event in Singapore. I was mostly working on digital PCB designs at the time and wanted to learn more about analog RF systems to expand my horizons and it was probably subconsciously manifested by my desire to go outside and touch some grass. 

I was also living on Vancouver Island at the time of starting the project, and thought it might be cool to create a network of weather stations on each of the surrounding islands to compare the different ecosystems.

## Schematic

## Power Architecture

![](/images/helios/Pasted%20image%2020261004025546.png)

The power system is fairly simple, it just has USB-C and solar panels for charging the LiPo battery with a low-power consumption, low-dropout regulator for the battery to drop it down to 3.3V from 3.7V.

There's a diode on the USB-C to prevent back-feeding power into the host and another one on the solar panel path to prevent power loss when USB-C is plugged in with low voltage on a plugged in solar panel. There's also a diode on the low-dropout regulator which will be explained soon.

There's 2 ways this part of the schematic could've been improved:
- Shield on USB-C can just be tied to ground instead of with a ferrite bead, because it's just creating a higher impedance path for noise to ground
- The diode on the solar panel causes a small voltage drop which reduces it's power efficiency so that can also be removed

![](/images/helios/Pasted%20image%2020261004025641.png)
