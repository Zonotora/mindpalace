---
slug: /networking/network-security
tags: []
lastModified: 2022-05-28
created: 2022-03-25
title: Network Security
header: [{"depth":1,"name":"Definitions","link":"Definitions"},{"depth":1,"name":"User authentication","link":"User-authentication"},{"depth":2,"name":"RADIUS","link":"RADIUS"},{"depth":2,"name":"Kerberos","link":"Kerberos"},{"depth":3,"name":"Issues","link":"Issues"},{"depth":1,"name":"Cryptography","link":"Cryptography"},{"depth":1,"name":"Attack methods","link":"Attack-methods"},{"depth":1,"name":"Network layer security","link":"Network-layer-security"},{"depth":1,"name":"Transport layer security","link":"Transport-layer-security"},{"depth":1,"name":"Firewalls","link":"Firewalls"},{"depth":1,"name":"SSL and TLS","link":"SSL-and-TLS"},{"depth":1,"name":"WLAN security","link":"WLAN-security"},{"depth":1,"name":"Common security protocols","link":"Common-security-protocols"},{"depth":1,"name":"Link level security","link":"Link-level-security"},{"depth":2,"name":"Switch","link":"Switch"},{"depth":2,"name":"VLAN","link":"VLAN"},{"depth":2,"name":"Threats","link":"Threats"},{"depth":3,"name":"Unauthorized joins","link":"Unauthorized-joins"},{"depth":3,"name":"Unauthorized expansion of the network","link":"Unauthorized-expansion-of-the-network"},{"depth":3,"name":"VLAN join","link":"VLAN-join"},{"depth":3,"name":"VLAN tagging and hopping","link":"VLAN-tagging-and-hopping"},{"depth":3,"name":"Remote access to the LAN","link":"Remote-access-to-the-LAN"},{"depth":3,"name":"Topology and vulnerability discovery","link":"Topology-and-vulnerability-discovery"},{"depth":3,"name":"Switch control","link":"Switch-control"},{"depth":3,"name":"Passive eavesdropping by link","link":"Passive-eavesdropping-by-link"},{"depth":3,"name":"MAC flooding","link":"MAC-flooding"},{"depth":3,"name":"MAC spoofing","link":"MAC-spoofing"},{"depth":3,"name":"ARP and DHCP poisoning","link":"ARP-and-DHCP-poisoning"},{"depth":4,"name":"ARP spoofing","link":"ARP-spoofing"},{"depth":4,"name":"DHCP spoofing","link":"DHCP-spoofing"},{"depth":3,"name":"Man in the middle","link":"Man-in-the-middle"},{"depth":3,"name":"Session hijacking","link":"Session-hijacking"},{"depth":3,"name":"Replay","link":"Replay"},{"depth":3,"name":"DoS","link":"DoS"},{"depth":3,"name":"System implementation and configuration","link":"System-implementation-and-configuration"},{"depth":2,"name":"Security solutions","link":"Security-solutions"},{"depth":1,"name":"VPN and remote access","link":"VPN-and-remote-access"},{"depth":1,"name":"List of useful resources","link":"List-of-useful-resources"}]
---

# Definitions
| Name | Description |
| - | - |
| Confidentiality | The ability to keep secrets. Protection against eavesdropping. |
| Integrity | Protection against unauthorized data packets modification/removal/forgery/...|
| Availability | The system is able to serve its authorized users. |
| Reliability | To keep a service reliable. |
| Maintainability | The ease at which a system can be maintained to keep functioning. |
| Accountability | Possibility to trace back actions to an entity. |
| Traceability | Possibility to trace back actions to an entity. |
| Authenticity | Possibility to check if the content, sender and transmission is genuine. |

# User authentication

## RADIUS
https://www.untruth.org/~josh/security/radius/

RADIUS is commonly used in embedded network devices. It is used for (as of 2001):
1. Embedded systems often have low storage capacity.
2. Centralized user administration. This is very needed when handling millions of users where the user base continuously gets updated.
3. Provides some protection against sniffing.
4. Consistent support from hardware vendors.

RADIUS has a couple of issues (as of 2001):
1. **Response Authenticator Based Shared Secret Attack**. An attacker can observe a valid Access-Request packet and the associated Access-Accept or Access-Reject packet to launch an offline attack on the shared secret. The MD5 state can be precomputed.
2. **User-Password Attribute Cipher Design Comments**. The User-Password protection scheme is a stream-cipher. A MD5 hash is used as a pseudorandom number generator. Because MD5 is not designed to be a stream cipher primitive it can lead to subtle flaws.
3. **User-Password Attribute Based Shared Secret Attack**.
4. **User-Password Based Password Attack**.
5. **Request Authenticator Based Attacks**. Many implementations use poor random generation for the Request Authenticator. If the random generation repeats values deterministically it ceases to provide the intended level of security.
6. **Passive User-Password Compromise Through Repeated Request Authenticators**. If the attacker observes a repeated Request Authenticator when sniffing the traffic between the client and the server, the attacker can XOR the first 16 octets of the protected passwords together, effectively XORing the passwords as if the were unprotected.
7. **DOS Arising from the Prediction of the Request Authenticator**.
8. **Shared Secret Hygiene**. The same Shared Secret could be used for multiple clients which is bad since any flawed client can be used to compromise several machines. Only ASCII is allowed and many implementations limits the secret to 16 characters or less.

## Kerberos
https://en.wikipedia.org/wiki/Kerberos_(protocol)

Kerberos was designed to be secure, reliable, transparent and scalable. It is suited for large environments. It is the default authentication system in Window. Kerberos consists of a Key Distribution Center (KDC) which consists of:

1. Authentication server (AS)
- Ticket-granting server (TGS)

There are two types of tickets:
1. Ticket Granting Ticket (TGT)
2. Service Granting Ticket (SGT)

A service needs to be registered in Kerberos upon it receives a secret key. To authenticate a service:
1. The client sends a plaintext message of the user ID to the AS requesting a TGT.
2. The AS checks whether the user is stored in the database. If the user is found a secret key is generated by hashing the password of the user found in the database. A TGT and a session key are created and encrypted with the secret. The result is sent back to the client.
3. The client is prompted for a password to decrypt the message received from the AS. If successful the client sends TGT and authenticator (client name, network address, time) to TGS.
4. The TGS decrypts the ticket and authenticator and verifies the request. If successful a SGT which is sent back.
5. The client sends the SGT and authenticator to the server.
6. If the SGT and authenticator match, the client is granted access to the service.



### Issues
1. Applications must be "Kerberized", that is, they must support tickets.
2. It is possible to fake a request for a ticket for another user, but only the correct user may decrypt and use the ticket.
3. The clocks of the involved hosts must be synchronized.


# Cryptography

# Attack methods

1. Social engineering
- Replay
- Systems security
- DoS and DDoS
- Spoofing
- Sniffing


# Network layer security

# Transport layer security

# Firewalls

# SSL and TLS
TLS is used to ensure secure traffic by encryption and authenticity.


# WLAN security

# Common security protocols

# Link level security


Stuxnet was a virus that initially spread through the use of USB. Once inside the LAN network it used several sophisticated methods to infect neighboring machines.


The Ethernet protocol.

TODO
Replacing IP routers with Ethernet switches makes
network configuration easier and faster, thanks to Ethernet
being self-configuring. Switches can be simpler than routers,
which lowers both cost and energy consumption. An IP
router must locate the IP header from the frame and perform
a longest-prefix matching based on the destination address,
decrease the time to live field and recalculate the checksum.
An Ethernet switch just needs to find recipient’s Media Access
Control (MAC) address in the MAC table.


## Switch

As a node in a network with a switch; when the node sends a frame through the switch, the switch learns from which port the frame is sent to and adds the MAC address of the sender as well as the port number to a table. If the sender's address can not be found in memory, the switch forwards the frame to all the other ports (flooding). A switch builds because of this, a partial view of the network's topology.
With more than one switch in a network, a switch is to another switch just multiple MAC addresses behind the same port. Links between switches are often called **trunk links**.

A typical switch has a structure of three levels:
1. **Data plane**.
2. **Control plane**.
3. **Management plane**

A switch utilizes the @(Spanning Tree Protocol)(spanning-tree-protocol) to prevent loops in the LAN. One of the switches are selected as a root switch and broadcasts a @(Bridge Protocol Data Units)(bridge-protocol-data-units) that has an associated cost. The cost is used to check for loops. Two protocols are needed for IPv4 when operating over Ethernet. The first protocol is @(Dynamic Host Configuration Protocol)(dynamic-host-configuration-protocol)  which is used to request an IP for a given host. A client without an IP address will send a request for DHCP servers using the Ethernet broadcast. The hosts then selects one server from the potentially multiple responses and sends a unicast message to that server for an IP address. If the host is statically configured, DHCP is not needed. The second protocol is @(Address Resolution Protocol)(address-resolution-protocol) which is used to map MAC addresses to corresponding IP addresses. A host that wants to communicate with another host, sends a broadcast message to get the corresponding MAC address for the IP address of the other host. Each host stores the mappings in a table called the ARP cache (for some duration).


## VLAN
TODO
Virtual LAN (VLAN) can be used to split the network into sub trees.

VLANs are used to separate a physical network into several
logical networks. Each switch in the network keeps a table
associating its ports with the various VLAN identifiers in use.
Fig. 4 shows such a network, with two VLANs in use. The
motivation for the VLAN mechanism is to increase efficiency
by limiting the size of the broadcast domain, but it is used
also for security purposes [27]. Hosts in different VLANs can
not send frames to each other directly.The


## Threats
Security has never been a major consideration when designing Ethernet. The goal is to provide cheap and easily deployable LAN. The threats arise in the self-configuring nature of Ethernet. An attacker may utilize the network access to learn about the network topology and network traffic for later use, gaining control over switches, sniffing, changing the traffic or block the traffic. An attacker must be able to access the network to be able to launch an attack in the first place.

### Unauthorized joins
Anybody can connect by Ethernet by gaining access to an unconnected port on a switch.

### Unauthorized expansion of the network
Users may expand the network by installing their own switches or access points. These will be automatically configured if switches currently in the network limits new MAC addresses.

### VLAN join
A switch may contain hidden features to an attacker can probe for.

### VLAN tagging and hopping
An attacker can create Ethernet frames that has a specific tag to be able to access VLANs they are not supposed to be able to access.

### Remote access to the LAN
An attacker can gain control over some remote system service in various ways (e.g. social engineering).

### Topology and vulnerability discovery
An attacker can analyze the network topology by probing the network to find hosts and services. Broadcast ARP requests reveal information about the IP addresses. The motivation of this attack is to gain knowledge of the applications and services in use on a host.

### Switch control
Control over a switch will allow an attacker to redirect traffic by rerouting links. However, a switch is not a general purpose computer and an external computer is needed.

### Passive eavesdropping by link
An attacker can capture the traffic between two hosts if a listening device is connected to a cable between the two devices. This is generally hard to detect.

### MAC flooding
Because a switch forwards and broadcasts the frame if the switch does not recognize the source, an attacker can easily generate enough frames with random addresses to overwrite the whole MAC table. The goal of MAC flooding is to allow normal traffic but broadcast it so the attacker can eavesdrop the traffic.

### MAC spoofing
An attacker can send a frame with a forged address to overwrite the correct entry, redirecting the traffic to the attacker instead. If the real user is online however a race condition will occur between the attacker and the real user where they compete for the entry in the MAC table. If the attacker can make the real user go offline on demand, the attacker could also potentially can access to sessions in higher level protocols the real user had.

### ARP and DHCP poisoning
#### ARP spoofing
ARP is stateless and most operating systems will accept ARP replies even when not requested. An attacker could therefore capture the traffic intended for another host by sending an ARP message to the sender with the IP address of the intended host and MAC address of the attacker.

#### DHCP spoofing
When a broadcast DHCP request is sent, an attacker can race a server by responding to the host that requested by replying first. If successful, the attacker can set the gateway and DNS servers to be able to control the host's traffic at will.

### Man in the middle
TODO

### Session hijacking
As many higher level protocols than Ethernet is stateful, an attacker can hijack the session of these protocols.

### Replay
An attacker can resend an eavesdropped message. The attacker has to consider whether it is worth resending as the message may be encrypted or authenticated.

### DoS
Denial of services attacks could be done by physically cutting the links, damaging any circuitry or congest the traffic in any way.

### System implementation and configuration
Protocol implementation may contain bugs an attacker may exploit in some way. If a network is incorrectly configured an attacker may get access to more than intended. Legacy technology may contain older implementation versions which were known to have flaws in some way.

## Security solutions
TODO

When looking for security in the Ethernet layer itself, it
is clear that the switches form the core of the solution. A
major problem is that a switch has no way of knowing if each
of its ports is connected to: one computer (a host); a host
with several virtual hosts (and virtual MAC addresses); a hub;
a silent switch (that does not talk STP and other topology
revealing protocols); a regular switch; or a switch that has
other switches behind it. This dynamic ambiguity makes the
issue challenging.

1. Router instead of switch
- Physical protection of the network
- VLANs
- Authentication based access control
- Access control lists

# VPN and remote access

# List of useful resources

| Description | Link |
| - | - |
| Common mechanisms of attack | https://capec.mitre.org/data/definitions/1000.html |
| Common domains of attack | https://capec.mitre.org/data/definitions/3000.html |
| Top tools | https://sectools.org/ |
| Common Vulnerability and Exposures (CVE) | https://www.cve.org/ |
| CyberChef | https://gchq.github.io/CyberChef/ |

