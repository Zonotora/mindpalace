---
slug: /networking/protocols
tags: ["wip"]
lastModified: 2022-04-03
created: 2021-07-04
title: Protocols
header: [{"depth":1,"name":"RADIUS","link":"RADIUS"},{"depth":1,"name":"IPv4","link":"IPv4"},{"depth":1,"name":"UDP","link":"UDP"},{"depth":1,"name":"TCP","link":"TCP"}]
---

1. DNS
- UDP
- SMTP
- POP
- PAP
- CHAP
- LDAP
- ICMP

# RADIUS
Remote Authentication Dial In User Service.

1. https://en.wikipedia.org/wiki/RADIUS
2. https://www.untruth.org/~josh/security/radius/radius-auth.html

RADIUS is supported and used by almost all vendors of authentication devices and is de-facto standard protocol for remote authentication.

# IPv4
Internet Protocol version 4.

1. https://en.wikipedia.org/wiki/IPv4

<table class="no-padding">
<tbody><tr>
<th>Offsets
</th>
<th>Octet
</th>
<th colspan="8">0
</th>
<th colspan="8">1
</th>
<th colspan="8">2
</th>
<th colspan="8">3
</th></tr>
<tr>
<th>Octet
</th>
<th>Bit
</th>
<th style="width:2.6%;">0
</th>
<th style="width:2.6%;">1
</th>
<th style="width:2.6%;">2
</th>
<th style="width:2.6%;">3
</th>
<th style="width:2.6%;">4
</th>
<th style="width:2.6%;">5
</th>
<th style="width:2.6%;">6
</th>
<th style="width:2.6%;">7
</th>
<th style="width:2.6%;">0
</th>
<th style="width:2.6%;">1
</th>
<th style="width:2.6%;">2
</th>
<th style="width:2.6%;">3
</th>
<th style="width:2.6%;">4
</th>
<th style="width:2.6%;">5
</th>
<th style="width:2.6%;">6
</th>
<th style="width:2.6%;">7
</th>
<th style="width:2.6%;">0
</th>
<th style="width:2.6%;">1
</th>
<th style="width:2.6%;">2
</th>
<th style="width:2.6%;">3
</th>
<th style="width:2.6%;">4
</th>
<th style="width:2.6%;">5
</th>
<th style="width:2.6%;">6
</th>
<th style="width:2.6%;">7
</th>
<th style="width:2.6%;">0
</th>
<th style="width:2.6%;">1
</th>
<th style="width:2.6%;">2
</th>
<th style="width:2.6%;">3
</th>
<th style="width:2.6%;">4
</th>
<th style="width:2.6%;">5
</th>
<th style="width:2.6%;">6
</th>
<th style="width:2.6%;">7
</th></tr>
<tr>
<th>0
</th>
<th>0
</th>
<td colspan="4">Version
</td>
<td colspan="4">IHL
</td>
<td colspan="6">DSCP
</td>
<td colspan="2">ECN
</td>
<td colspan="16">Total Length
</td></tr>
<tr>
<th>4
</th>
<th>32
</th>
<td colspan="16">Identification
</td>
<td colspan="3">Flags
</td>
<td colspan="13">Fragment Offset
</td></tr>
<tr>
<th>8
</th>
<th>64
</th>
<td colspan="8">Time To Live
</td>
<td colspan="8">Protocol
</td>
<td colspan="16">Header Checksum
</td></tr>
<tr>
<th>12
</th>
<th>96
</th>
<td colspan="32">Source IP Address
</td></tr>
<tr>
<th>16
</th>
<th>128
</th>
<td colspan="32">Destination IP Address
</td></tr>
<tr>
<th>20
</th>
<th>160
</th>
<td colspan="32" rowspan="3">Options (if IHL &gt; 5)
</td></tr>
<tr>
<th>⋮
</th>
<th>⋮
</th></tr>
<tr>
<th>56
</th>
<th>448
</th></tr></tbody></table>

# UDP
User Datagram Protocol.

1. https://en.wikipedia.org/wiki/User_Datagram_Protocol

<table class="no-padding">
<tbody><tr>
<th>Offsets
</th>
<th>Octet </th>
<th colspan="8">0
</th>
<th colspan="8">1
</th>
<th colspan="8">2
</th>
<th colspan="8">3
</th></tr>
<tr>
<th>Octet </th>
<th>Bit</th>
<th>0</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>0</th>
<th>1</th>
<th>2</span></th>
<th>3</span></th>
<th>4</span></th>
<th>5</span></th>
<th>6</span></th>
<th>7</span></th>
<th>0</span></th>
<th>1</span></th>
<th>2</span></th>
<th>3</span></th>
<th>4</span></th>
<th>5</span></th>
<th>6</span></th>
<th>7</span></th>
<th>0</span></th>
<th>1</span></th>
<th>2</span></th>
<th>3</span></th>
<th>4</span></th>
<th>5</span></th>
<th>6</span></th>
<th>7</span>
</th></tr>
<tr>
<th>0
</th>
<th>0
</th>
<td colspan="16" >Source port</td>
<td colspan="16">Destination port
</td></tr>
<tr>
<th>4
</th>
<th>32 </th>
<td colspan="16">Length</td>
<td colspan="16">Checksum
</td></tr></tbody></table>

# TCP
Transmission Control Protocol.

1. https://en.wikipedia.org/wiki/Transmission_Control_Protocol

<table class="no-padding">
  <tbody>
    <tr>
      <th>Offsets</th>
      <th>Octet</th>
      <th colspan="8">0</th>
      <th colspan="8">1</th>
      <th colspan="8">2</th>
      <th colspan="8">3</th>
    </tr>
    <tr>
      <th style="border-top: none">Octet</th>
      <th>Bit</th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>4</th>
      <th>5</th>
      <th>6</th>
      <th>7</th>
    </tr>
    <tr>
      <th>0</th>
      <th>0</th>
      <td colspan="16">Source port</td>
      <td colspan="16">Destination port</td>
    </tr>
    <tr>
      <th>4</th>
      <th>32</th>
      <td colspan="32">Sequence number</td>
    </tr>
    <tr>
      <th>8</th>
      <th>64</th>
      <td colspan="32">Acknowledgment number (if ACK set)</td>
    </tr>
    <tr>
      <th>12</th>
      <th>96</th>
      <td colspan="4">Data offset</td>
      <td colspan="3">Reserved<br /><b>0 0 0</b></td>
      <td>
        <div
          style="
            writing-mode: vertical-lr;
            text-orientation: upright;
            letter-spacing: -0.12em;
            line-height: 1em;
            width: 1em;
          "
        >
          NS
        </div>
      </td>
      <td>
        <div
          style="
            writing-mode: vertical-lr;
            text-orientation: upright;
            letter-spacing: -0.12em;
            line-height: 1em;
            width: 1em;
          "
        >
          CWR
        </div>
      </td>
      <td>
        <div
          style="
            writing-mode: vertical-lr;
            text-orientation: upright;
            letter-spacing: -0.12em;
            line-height: 1em;
            width: 1em;
          "
        >
          ECE
        </div>
      </td>
      <td>
        <div
          style="
            writing-mode: vertical-lr;
            text-orientation: upright;
            letter-spacing: -0.12em;
            line-height: 1em;
            width: 1em;
          "
        >
          URG
        </div>
      </td>
      <td>
        <div
          style="
            writing-mode: vertical-lr;
            text-orientation: upright;
            letter-spacing: -0.12em;
            line-height: 1em;
            width: 1em;
          "
        >
          ACK
        </div>
      </td>
      <td>
        <div
          style="
            writing-mode: vertical-lr;
            text-orientation: upright;
            letter-spacing: -0.12em;
            line-height: 1em;
            width: 1em;
          "
        >
          PSH
        </div>
      </td>
      <td>
        <div
          style="
            writing-mode: vertical-lr;
            text-orientation: upright;
            letter-spacing: -0.12em;
            line-height: 1em;
            width: 1em;
          "
        >
          RST
        </div>
      </td>
      <td>
        <div
          style="
            writing-mode: vertical-lr;
            text-orientation: upright;
            letter-spacing: -0.12em;
            line-height: 1em;
            width: 1em;
          "
        >
          SYN
        </div>
      </td>
      <td>
        <div
          style="
            writing-mode: vertical-lr;
            text-orientation: upright;
            letter-spacing: -0.12em;
            line-height: 1em;
            width: 1em;
          "
        >
          FIN
        </div>
      </td>
      <td colspan="16">Window Size</td>
    </tr>
    <tr>
      <th>16</th>
      <th>128</th>
      <td colspan="16">Checksum</td>
      <td colspan="16">Urgent pointer (if URG set)</td>
    </tr>
    <tr>
      <th>20<br /></th>
      <th>160<br /></th>
      <td colspan="32" rowspan="3">
        Options (if <i>data offset</i> &gt; 5. Padded at the end with "0" bits
        if necessary.)<br />
      </td>
    </tr>
    <tr>
      <th>⋮</th>
      <th>⋮</th>
    </tr>
    <tr>
      <th>60</th>
      <th>480</th>
    </tr>
  </tbody>
</table>
