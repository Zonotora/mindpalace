---
slug: /networking/firewall
tags: ["wip"]
lastModified: 2022-05-02
created: 2021-07-03
title: Firewall
header: [{"depth":1,"name":"General","link":"General"},{"depth":1,"name":"Design goals","link":"Design-goals"},{"depth":1,"name":"Capabilities and limitations","link":"Capabilities-and-limitations"},{"depth":1,"name":"Types","link":"Types"}]
---

# General
https://en.wikipedia.org/wiki/Firewall_(computing)

The firewall can only protect against attacks that go through the firewall. The firewall could be a dedicated box, a PC, a router, a collection of hosts. If the firewall is overloaded, it can no longer process all the packets and must drop some packets. Thus, potentially vulnerable to @(DoS)(dos) attacks. Many firewall solutions are designed to handle normal traffic, but lack the ability to handle traffic during heavy attacks. The ideal firewall must have the capacity to handle traffic no matter how heavy the traffic load is. High-security firewalls are often based on proxy technology.


1. **Application level**. Application level firewalls need to understand application level protocols like FPT, HTTP, SMTP etc. It must also be able to filter virus/worm/Trojan.
2. **Transport and network level**. The most common case where attacks occur. Therefore, most firewalls focus on this level. Protocols that occur here are TCP, UDP and IP.
3. **Data-link level**. Attacks can occur here, but the attacker must have access to the local network.
4. **Physical level**. Firewalls do (often, air-gap?) not protect against the physical level.


# Design goals
1. All traffic ingress as well as egress traffic must pass through the firewall.
2. Only authorized traffic should be passed by the firewall. Authorized traffic is defined by the local security policy in use.
3. The firewall itself should be immune to penetration.


Specifying a suitable policy is a critical component when planning the implementation of the firewall. The policy will most certainly be different for different types of systems. The policy should be developed from a broad perspective and then be more specific. The firewall could use the following characteristics to achieve a suitable policy

1. **IP address and protocol**. Filters out packets that does not match a certain source or destination address, a certain source or destination port or other network and transport layer properties. Could be used for stateful firewalls.
2. **Application protocol**. Controls which applications should be able to communicate through the firewall.
3. **User identity**. Controls which users may communicate based on some form of secure authentication.
4. **Network activity**. Controls properties of the network flow. At what time of the day should traffic be able to pass through the firewall? How many requests are allowed in some specific interval?

# Capabilities and limitations
A firewall should be able to keep unauthorized traffic out of a protected network, by prohibiting potentially malicious or vulnerable services from entering or leaving the network, blocking certain source and target addresses or ports. A firewall functions as a centralized service for securing the access to a network which eases the security management.
A firewall keeps log of interesting events and may trigger alarms based on these events.
A firewall can be used to implement virtual private networks using tunnel mode.

A firewall cannot protect against attacks that have already bypassed the firewall. Internal threats such as employees or infected computers could potentially circumvent the firewall.


# Types

| Security | <div style="border: 1px solid white; width: 100%;"/></div> | <div style="border: 1px solid white; width: 100%;"/></div> | <div style="border: 1px solid white; width: 100%;"/></div> | <div style="border: 1px solid white; width: 100%;"/></div> | >  |
| - | - | - | - | - | - |
| Static packet filters | Dynamic packet filters | Stateful packet inspection | Circuit level gateways | Application layer gateways | Air-gap firewalls |
| | | | Proxy | Proxy | |