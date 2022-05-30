---
slug: /networking/network-security
tags: []
lastModified: 2022-05-30
created: 2022-03-25
title: Network Security
header: [{"depth":1,"name":"Definitions","link":"Definitions"},{"depth":1,"name":"Attack methods","link":"Attack-methods"},{"depth":2,"name":"Social engineering","link":"Social-engineering"},{"depth":2,"name":"Reflection","link":"Reflection"},{"depth":2,"name":"Replay","link":"Replay"},{"depth":2,"name":"System security","link":"System-security"},{"depth":2,"name":"DoS and DDoS","link":"DoS-and-DDoS"},{"depth":2,"name":"Spoofing","link":"Spoofing"},{"depth":2,"name":"Sniffing","link":"Sniffing"},{"depth":1,"name":"User authentication","link":"User-authentication"},{"depth":2,"name":"CHAP","link":"CHAP"},{"depth":2,"name":"RADIUS","link":"RADIUS"},{"depth":3,"name":"Message format","link":"Message-format"},{"depth":3,"name":"Issues","link":"Issues"},{"depth":2,"name":"Kerberos","link":"Kerberos"},{"depth":3,"name":"Issues","link":"Issues"},{"depth":2,"name":"Certificates","link":"Certificates"},{"depth":3,"name":"Chain of trust","link":"Chain-of-trust"},{"depth":1,"name":"Cryptography","link":"Cryptography"},{"depth":2,"name":"Hash functions","link":"Hash-functions"},{"depth":3,"name":"Diffie-Hellman key agreement","link":"Diffie-Hellman-key-agreement"},{"depth":2,"name":"Rainbow tables","link":"Rainbow-tables"},{"depth":1,"name":"Network layer security","link":"Network-layer-security"},{"depth":1,"name":"Transport layer security","link":"Transport-layer-security"},{"depth":2,"name":"UDP","link":"UDP"},{"depth":2,"name":"TCP","link":"TCP"},{"depth":3,"name":"SYN scan","link":"SYN-scan"},{"depth":3,"name":"ACK scan","link":"ACK-scan"},{"depth":3,"name":"FIN scan","link":"FIN-scan"},{"depth":3,"name":"NULL scan","link":"NULL-scan"},{"depth":3,"name":"XMAS scan","link":"XMAS-scan"},{"depth":3,"name":"Fingerprinting","link":"Fingerprinting"},{"depth":2,"name":"Issues","link":"Issues"},{"depth":1,"name":"Firewalls","link":"Firewalls"},{"depth":1,"name":"SSL and TLS","link":"SSL-and-TLS"},{"depth":1,"name":"WLAN security","link":"WLAN-security"},{"depth":1,"name":"Common security protocols","link":"Common-security-protocols"},{"depth":1,"name":"Link level security","link":"Link-level-security"},{"depth":2,"name":"Switch","link":"Switch"},{"depth":2,"name":"VLAN","link":"VLAN"},{"depth":2,"name":"Threats","link":"Threats"},{"depth":3,"name":"Unauthorized joins","link":"Unauthorized-joins"},{"depth":3,"name":"Unauthorized expansion of the network","link":"Unauthorized-expansion-of-the-network"},{"depth":3,"name":"VLAN join","link":"VLAN-join"},{"depth":3,"name":"VLAN tagging and hopping","link":"VLAN-tagging-and-hopping"},{"depth":3,"name":"Remote access to the LAN","link":"Remote-access-to-the-LAN"},{"depth":3,"name":"Topology and vulnerability discovery","link":"Topology-and-vulnerability-discovery"},{"depth":3,"name":"Switch control","link":"Switch-control"},{"depth":3,"name":"Passive eavesdropping by link","link":"Passive-eavesdropping-by-link"},{"depth":3,"name":"MAC flooding","link":"MAC-flooding"},{"depth":3,"name":"MAC spoofing","link":"MAC-spoofing"},{"depth":3,"name":"ARP and DHCP poisoning","link":"ARP-and-DHCP-poisoning"},{"depth":4,"name":"ARP spoofing","link":"ARP-spoofing"},{"depth":4,"name":"DHCP spoofing","link":"DHCP-spoofing"},{"depth":3,"name":"Man in the middle","link":"Man-in-the-middle"},{"depth":3,"name":"Session hijacking","link":"Session-hijacking"},{"depth":3,"name":"Replay","link":"Replay"},{"depth":3,"name":"DoS","link":"DoS"},{"depth":3,"name":"System implementation and configuration","link":"System-implementation-and-configuration"},{"depth":2,"name":"Security solutions","link":"Security-solutions"},{"depth":1,"name":"VPN and remote access","link":"VPN-and-remote-access"},{"depth":1,"name":"List of useful resources","link":"List-of-useful-resources"}]
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

# Attack methods

## Social engineering

## Reflection
https://en.wikipedia.org/wiki/Reflection_attack

A reflection attack is a method of attacking a challenge-response authentication system that uses the same protocol in both directions. The attack consists of tricking the target to providing the answer to its own challenge.

## Replay

## System security

## DoS and DDoS

## Spoofing

## Sniffing

# User authentication

## CHAP
Challenge Handshake Authentication Protocol (CHAP) is a protocol where a client computes a hash of a challenge message and secret. The server performs the same computation and verifies the response.

## RADIUS
https://www.untruth.org/~josh/security/radius/

Remote Authentication Dial In User Service (RADIUS) is commonly used in embedded network devices. It is used for (as of 2001):
1. Embedded systems often have low storage capacity.
2. Centralized user administration. This is very needed when handling millions of users where the user base continuously gets updated.
3. Provides some protection against sniffing.
4. Consistent support from hardware vendors.


### Message format

<table class="no-padding">
<tbody>
<tr>
    <th colspan="1">Code </th>
    <th colspan="1">ID </th>
    <th colspan="2">Length </th>
<tr>
    <th colspan="4">Authenticator </th>
</tr>
</tbody>
</table>

| Code | Description |
| - | - |
| 1 | Access-Request |
| 2 | Access-Accept |
| 3 | Access-Reject |
| 4 | Accounting-Request |
| 5 | Accounting-Response |
| 11 | Access-Challenge |

### Issues

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

## Certificates
A certificate associates a public key with a name. The certificate contains the ID of the owner, the public key and the signature from a Certificate Authority (CA). It does not contain the private key. Certificates are used to establish a secure connection. Web servers over `https` use certificates. Thus browsers need to support certificates. However, they often support to many CAs. Some have been exposed and some are not careful enough when issuing certificates.


### Chain of trust
The technology of certificates build upon a chain of trust. Someone in the chain of trust needs to be trusted. This is normally the root CA. Every certificate in the CA chain must be verified.

# Cryptography

Use asymmetric algorithms to agree on symmetric keys (asymmetric ciphers are slowest). Symmetric algorithms for bulk data encryption (symmetric ciphers are faster). Hash functions for integrity protection (hash functions are fastest).

## Hash functions
A hash function must be:
1. Computationally efficient
- Repeatable
- Space efficient
- Unique
- Random

Common hash functions are:
1. **MD5**. Should not be used in new design as it is broken.
- **SHA-1**. Should not be used in new design as it is broken.
- **SHA-2**. Family name for SHA-224, SHA-256, SHA-384 and SHA-512. Is used and enough for today's standards.
- **SHA-3**. Next generation hash functions. More secure than SHA-2.

Hash functions are weak against:
1. **Collision attack**. With weak hash functions there is the possibility of creating two inputs with the same hash. MD5 only requires $ 2^{33} $ searches (< 1 minute) to generate a collision.
- **Preimage attack**. Finding a collision to an existing image is harder. MD5 requires $ 2^{123,4} $ searches.

HMAC is a keyed hash and defined like follows
$$
\boxed{
\text{HMAC}_K (\text{text}) = \text{hash} (K \oplus \text{opad} || \text{hash}(K \oplus \text{ipad} || \text{text}))
}
$$
where $ K $ is a secret key, $ || $ is concatenation, ipad = 0x363636... and opad = 0x5c5c5c... The key length is the same as the hash length. It is used in conjunction with the hash function used.

### Diffie-Hellman key agreement
Diffie-Hellman key agreement is a secure way of exchanging keys over an untrusted network, but it does not offer protection against MITM attacks. We share a key, but we are not certain with whom. It relies on the fact that $ (g^x)^y = (g^y)^x $.

## Rainbow tables
A rainbow table is a precomputed table for caching the output of hash functions. They can be used to find passwords of simple words. There is a space-time tradeoff. Rainbow tables are more or less useless if salts are used in the key derivation. A reduction function $ R $ is a function to map hashes back to passwords. A chain is created with the hash function are the reduction function. The first and last value of the chain is stored and sorted on the last value. These are the values stored in the rainbow table. To use the table, we apply $ R $ to see if it matches a "last value" in our table. If not we apply $ H $ and $ R $ until we find a match. We repeat at maximum $ k $ times. If there is a match we recreate the chain from the beginning to find the password.




# Network layer security
The network layer is responsible for packet forwarding. The Internet Protocol (IP) has many fields than can be abused.

1. An attacker can send a packet as a spoofed source. The victim cannot distinguish this packet from a packet sent from the real client. Replies are sent back to the address owner. This will:
    - Give the attacker anonymity.
    - The attacker can blame someone else for sending packets.
    - Can exploit the trust between hosts.
2. If a datagram length differs from its actual length problems may arise:
    - **Actual length > header length**. Buffer overrun may occur.
    - **Actual length < header length**. Packet may be placed in a buffer that is too large, which contains old contents that may be forwarded to the receiver.
3. **LAND attack**. An attacker can send a packet with the victim's own IP address as the source and the destination with possibly the same port. This could trigger some implementation bug.
4. Fragmented packets may trigger reassembly bugs.
5. **Teardrop attack**. A type of fragmented reassembly bug where an attacker sends two fragmented IP datagrams. The second fits in the first datagram, and the bytes to copy is calculated as a subtraction of the lengths and offsets of each datagram causing the bytes to copy to become negative and is then treated as an unsigned integer resulting in huge number of bytes to copy.
6. **Ping-of-Death attack**. Send oversized datagrams with the help of fragmentation.
7. **Idle scanning**. Idle scanning is possible if fragment ID are not unique per IP address. It is used to see if a host is trusted by another host, if so it is a suitable target.
8. TTL can be abused.
9. **Firewalk**.


Border routers and firewalls should drop:
1. Broadcast addresses as destination
- Multicast addresses as source
- Unassigned addresses (reserved for future use)
- Invalid addresses
- Private addresses
- Datagrams with options as many are obsolete today

# Transport layer security

A good reason for having an intrusion detection system (IDS) is to detect scans.

## UDP
UDP datagrams could be inserted in an ongoing stream easily since there is no sequence numbers in UDP.
UDP scans could be hard to make use of as we usually do not get any responses. However, in some cases the application level protocol may respond.

## TCP

### SYN scan
If a port is closed a RST should be sent back. If the port is open a SYN/ACK should be sent back. If the handshake is not completed the application will not be notified. However, partly established networks are visible with e.g. the "netstat" command, so therefore a program that scans should immediately send RST after receiving SYN/ACK to make it more stealthy. Scanning is a noisy process so:
1. Scan fewer systems and ports
- Scan more slowly to avoid detection
- Scan one host but from different IP addresses
- Scan many hosts instead of one if systems are equally configured

### ACK scan
If a port is closed a RST should be sent back. Incorrect number of ACKs should also return RST. If there is no response the port may be filtered. This scan is not visible as the SYN scan by e.g. "netstat". Can be used to see if a firewall is stateful. The RST response may leak more information as well, if the window size is greater than 0 the port is open.


### FIN scan
A FIN scan is similar to a SYN scan. If a port is closed a RST should be sent back. If port is open and segment does not contain SYN, RST or ACK the segment should be dropped. Therefore, if the response is RST, the port is closed. No response at all if the port is open and does not contain SYN, RST, ACK. This scan is not visible either by e.g. "netstat". Some system will however always return RST.

### NULL scan
No flags are set. The same responses as FIN scan.

### XMAS scan
The flags URG, PSH and FIN are set. A RST should be sent if a prot is closed.

### Fingerprinting
The goal of fingerprinting is to identify what type of operating system and application a host has. There are two types of fingerprinting, passive and active. In passive fingerprinting, packets are listened to and checked for certain parameters. In active fingerprinting, messages are actively sent to get certain information.

## Issues

1. **Zero Window Size**. An attacker creates many connections to a server with a TCP window size of 0. The server will keep the connections alive but can not send any data. Victims may become unresponsive. Even if the application closes the connections, TCP will hang in FIN-WAIT as it wants to send the last data before closing the connection (implementation based).
2. TCP misuse with PSH and ACK.
3. TCP performance could be attack. An attacker could insert 3 ACKs for someone else to enable "fast retransmit" or "slow start".
4. Session hijacking through TCP sequence number prediction. To take over a complete session an attacker must silence the original source to prevent replies being sent there. The attacker cannot see the TCP sequence numbers. There fields are more or less known depending on scenario:
    - Source IP address (could be static or guessed)
    - Server IP address
    - Server port

    The source port (16 bits) must be guessed as well as the TCP sequence number (32 bits). Depending on application, a well known port for that application may be used and if the sequence numbers follow a pattern it is possible to guess. Connecting multiple times to a service may reveal how the sequence numbers are generated. Today to protect against TCP sequence number guessing, the numbers should be completely random. However, good random numbers require a good source of entropy which may be hard for a lot of IoT devices.
5. **RST attack**.
6. **SYN flood attack**. An attacker sends a lot of SYN segments. The target will allocate resources, sends SYN/ACK and then waits for an ACK. When the target's connection table is full it can no longer respond to new connections. The SYN/ACK will time out, but to keep the table full the attacker only has to send SYN segments at a faster speed than the time outs. SYN floods are easy to capture.
7. **SYN Cookies**.
8. **TCP magnification attacks**. Smurf and Fraggle are examples of this type of attack. Smurf uses ICMP echo packets with a broadcast address as the destination and the victim as the source. This will potentially generate very many echo replies back to the victim. If UDP is used, the attack is called Fraggle instead.

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

