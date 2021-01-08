---
slug: /control-theory
date: 2021-01-08
title: Control Theory
header: [{"depth":1,"name":"Känslighetsfunktioner","link":"Kanslighetsfunktioner"},{"depth":2,"name":"Känslighetsfunktionen","link":"Kanslighetsfunktionen"},{"depth":2,"name":"Komplementära känslighetsfunktionen","link":"Komplementara-kanslighetsfunktionen"},{"depth":2,"name":"Störkänslighetsfunktionen","link":"Storkanslighetsfunktionen"},{"depth":2,"name":"Styrkänslighetsfunktionen","link":"Styrkanslighetsfunktionen"},{"depth":1,"name":"PID - Dimensionering","link":"PID---Dimensionering"},{"depth":2,"name":"P","link":"P"},{"depth":2,"name":"PI","link":"PI"},{"depth":2,"name":"PD","link":"PD"},{"depth":3,"name":"Maximalt faslyft","link":"Maximalt-faslyft"},{"depth":2,"name":"PID","link":"PID"},{"depth":1,"name":"Tillståndsåterkoppling","link":"Tillstandsaterkoppling"}]
---

# Känslighetsfunktioner

## Känslighetsfunktionen
$$
S(s) = \frac{1}{1 + L(s)}
$$

## Komplementära känslighetsfunktionen
$$
T(s) = 1 - S(s) = \frac{L(s)}{1 + L(s)}
$$

## Störkänslighetsfunktionen
$$
G_v(s)S(s) = \frac{G_v(s)}{1 + L(s)}
$$

## Styrkänslighetsfunktionen
$$
F(s)S(s) = \frac{F(s)}{1 + L(s)}
$$

# PID - Dimensionering
Dessa beteckningar införs
$$
K_p = proportionell förstärkning \\
T_i = integraltidskonstant \\
T_d = derivatatidskonstant \\
K_i = \frac{K_p}{T_i} \\
K_d = K_p T_d \\
$$

Vi utgår ifrån önskad överkorsningsfrekvens $ w_c $ vilket ger följande

$$
| L(jw_c) |  = 1
\qquad\mathrm{och}\qquad
\angle L(jw_c) = -180 \degree + \varphi_m
$$

Det innebär att
$$
| F(jw_c) | = \frac{1}{| G(jw_c) |}
$$
$$
\angle F(jw_c) = -180 \degree + \varphi_m + \angle G(jw_c)
$$

## P
$$
F_{P}(s) = K_p
$$

## PI
$$
F_{PI}(s) = K_p(1 + \frac{1}{T_is}) = K_p + \frac{K_i}{s} = K_i \frac{1 + T_i}{s}
$$

## PD
En ideal PD-regulartor ges av följande
$$
F_{PD}(s) = K_p(1 + T_ds)
$$
Mera vanligt i praktiken är däremot att filtrera D-delen
$$
F_{PD}(s) = K_p(1 + \frac{T_ds}{1 + T_fs}) = K_p\frac{1 + s\tau_d}{1 + s\frac{\tau_d}{b}}
$$
$$
\tau_d = T_d + T_f
\qquad\mathrm{och}\qquad
b = \frac{T_d + T_f}{T_f}
$$

för att undvika högfrekventa störningar.

### Maximalt faslyft
$$
\varphi_{max} = \max \angle F_{PD}(j\omega)

$$
$$
\omega_m = \frac{ \sqrt{b} }{ \tau_d}
$$

## PID
$$
F_{PID}(s) = K_p(1 + \frac{1}{T_is} + T_ds) = K_p + \frac{K_i}{s} + K_ds
$$







# Tillståndsåterkoppling
