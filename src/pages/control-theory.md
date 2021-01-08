---
slug: /control-theory
date: 2021-01-08
title: Control Theory
header: [{"depth":1,"name":"Dynamiska modeller","link":"Dynamiska-modeller"},{"depth":2,"name":"Begynnelsevärdessatsen","link":"Begynnelsevardessatsen"},{"depth":2,"name":"Slutvärdessatsen","link":"Slutvardessatsen"},{"depth":2,"name":"Statisk förstärkning","link":"Statisk-forstarkning"},{"depth":1,"name":"Tillståndsmodeller","link":"Tillstandsmodeller"},{"depth":2,"name":"Linjärisering","link":"Linjarisering"},{"depth":1,"name":"Tids- och frekvensplanet","link":"Tids--och-frekvensplanet"},{"depth":1,"name":"Stabilitet","link":"Stabilitet"},{"depth":1,"name":"Principer för dimensionering","link":"Principer-for-dimensionering"},{"depth":2,"name":"Känslighetsfunktionen","link":"Kanslighetsfunktionen"},{"depth":2,"name":"Komplementära känslighetsfunktionen","link":"Komplementara-kanslighetsfunktionen"},{"depth":2,"name":"Störkänslighetsfunktionen","link":"Storkanslighetsfunktionen"},{"depth":2,"name":"Styrkänslighetsfunktionen","link":"Styrkanslighetsfunktionen"},{"depth":1,"name":"PID - Dimensionering","link":"PID---Dimensionering"},{"depth":2,"name":"P","link":"P"},{"depth":2,"name":"PI","link":"PI"},{"depth":2,"name":"PD","link":"PD"},{"depth":3,"name":"Maximalt faslyft","link":"Maximalt-faslyft"},{"depth":2,"name":"PID","link":"PID"},{"depth":1,"name":"Alternativa designprinciper","link":"Alternativa-designprinciper"},{"depth":1,"name":"Dimensionering på tillståndsform","link":"Dimensionering-pa-tillstandsform"},{"depth":1,"name":"Tidsdiskreta regulatorer","link":"Tidsdiskreta-regulatorer"}]
---

# Dynamiska modeller
---

## Begynnelsevärdessatsen
Används för att bestämma begynnelsevärdet för $ u(t) $, vilket kan vara viktigt för att veta hur styrsignalen $ u(t) $ beter sig precis efter en stegförändring.

$$
\boxed{u(0) = \lim_{s \to \infty} sU(s)}
$$


## Slutvärdessatsen
Används för att studera vad systemets utsignal konvergerar mot då $ t \to \infty $. Det är ofta väldigt intressant att veta vad reglerfelet $ e(t) = r(t) - y(t) $ kovergerar mot.

$$
\boxed{\lim_{t \to \infty} e(t) = \lim_{s \to 0} sE(s)}
$$


## Statisk förstärkning
Då insignalen u(t) är en konstant $ u_0 $ samtidigt som utsignalen $ y(t) $ svänger mot en konstant nivå definieras den statiska förstärkningen som

$$
K = \frac{y_{\infty}}{u_0}
$$

Om vi använder ***slutvärdessatsen*** kommer den statiska förstärkningen därför bli

$$
\boxed{K = \frac{y_{\infty}}{u_0} = G(0)}
$$

# Tillståndsmodeller
---
$$
\dot x(t) = Ax(t) + Bu(t)
$$
$$
y(t) = Cx(t) + Du(t)
$$

Matriserna uttrycks på följande sätt och $ (B, C, D) $ förenklas
$$
A = \begin{bmatrix}
    a_{11} & a_{12} & a_{1n} \\
    \vdots & \ddots & \vdots \\
    a_{n1} & \dots  & a_{nn}
    \end{bmatrix}
\qquad\qquad
B = \begin{bmatrix}
    b_{1} \\
    b_{2} \\
    \vdots \\
    b_{n} \\
    \end{bmatrix}
\qquad\qquad
C = \begin{bmatrix}
    c_{1} & c_{2} & \dots & c_{n}
    \end{bmatrix}
\qquad\qquad
D = d
$$

För att beräkna överföringsfunktionen för en tillståndsmodell används
$$
\boxed{G(s) = C(sI - A)^{-1}B + D}
$$

Polerna bestäms av polynomekvationen, den så kallade ***karakteristiska ekvationen***
$$
\boxed{det(sI - A) = 0}
$$

## Linjärisering
Om vi har den olinjära tillståndsmodellen

$$
\dot x(t) = f(x(t), u(t))
$$
$$
y(t) = g(x(t), u(t))
$$

och betraktar en arbetspunkt $ (x_0, u_0, y_0) $ där jämvikt råder $( \dot x_0 = 0 )$ får vi

$$
0 = f(x_0, u_0)
$$
$$
y_0 = g(x_0, u_0)
$$

Man fortgår sedan med att Taylorserieutveckla den olinjära tillståndsmodellen kring arbetspunkten där endast första ordningens termer tas

$$
\varDelta x(t) = x(t) - x_0
\qquad\qquad
\varDelta u(t) = u(t) - u_0
\qquad\qquad
\varDelta y(t) = y(t) - y_0
$$

$$
A = \frac{\partial f}{\partial x} |_{(x_0, u_0)}
\qquad\qquad
B = \frac{\partial f}{\partial u} |_{(x_0, u_0)}
\qquad\qquad
C = \frac{\partial g}{\partial x} |_{(x_0, u_0)}
\qquad\qquad
D = \frac{\partial g}{\partial u} |_{(x_0, u_0)}
$$

$$
\frac{\partial f}{\partial x}
=
\begin{bmatrix}
    \partial f_1 \\
    \vdots \\
     \partial f_n \\
\end{bmatrix}
\begin{bmatrix}
    \frac{1}{\partial x_1} \dots \frac{1}{\partial x_n}
\end{bmatrix}
=
\begin{bmatrix}
    \frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_n} \\
    \vdots & & \vdots  \\
    \frac{\partial f_n}{\partial x_1} & \dots & \frac{\partial f_n}{\partial x_n} \\
\end{bmatrix}
$$

# Tids- och frekvensplanet
---

# Stabilitet
---

# Principer för dimensionering
---

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
---
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
\qquad\qquad
\angle L(jw_c) = -180 \degree + \varphi_m
$$

Det innebär att
$$
| F(jw_c) | = \frac{1}{| G(jw_c) |}
$$
$$
\angle F(jw_c) = -180 \degree + \varphi_m - \angle G(jw_c)
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
\qquad\qquad
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





# Alternativa designprinciper
---

# Dimensionering på tillståndsform
---

# Tidsdiskreta regulatorer
---