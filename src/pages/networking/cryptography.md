---
slug: /networking/cryptography
tags: ["wip"]
lastModified: 2022-06-10
created: 2022-04-03
title: Cryptography
header: [{"depth":1,"name":"AES","link":"AES"},{"depth":1,"name":"Asymmetric key encryption","link":"Asymmetric-key-encryption"},{"depth":1,"name":"References","link":"References"}]
---


# AES
Advanced Encryption Standard

1. https://sv.wikipedia.org/wiki/Advanced_Encryption_Standard
2. https://www.moserware.com/2009/09/stick-figure-guide-to-advanced.html


# Asymmetric key encryption

One key is often made public. We can either choose to have the encryption key as public or the decryption key as public. In this case everyone can send encrypted messages to the owner of the private key.
If the decryption key is public, everyone can verify that the public key has been used to encrypt a message. This can be used to sign documents.
Asymmetric ciphers are very slow compared to symmetric ciphers and hash functions.
With the advances of quantum computing there is a potential to halve the key size for symmetric ciphers (Grover's algorithm @{grover}) and if the factorization problem is solved (Shor's algorithm @{shor})  public key encryption is broken.


# References
{grover}:
    url: https://en.wikipedia.org/wiki/Grover%27s_algorithm

{shor}:
    url: https://en.wikipedia.org/wiki/Shor%27s_algorithm