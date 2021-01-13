---
slug: /control-theory
date: 2021-01-13
title: Control Theory
header: [{"depth":1,"name":"Dynamiska modeller","link":"Dynamiska-modeller"},{"depth":2,"name":"Begynnelsevärdessatsen","link":"Begynnelsevardessatsen"},{"depth":2,"name":"Slutvärdessatsen","link":"Slutvardessatsen"},{"depth":2,"name":"Statisk förstärkning","link":"Statisk-forstarkning"},{"depth":2,"name":"Kvarstående fel","link":"Kvarstaende-fel"},{"depth":2,"name":"Generell överföringsfunktion av första ordningen","link":"Generell-overforingsfunktion-av-forsta-ordningen"},{"depth":2,"name":"Generell överföringsfunktion av andra ordningen","link":"Generell-overforingsfunktion-av-andra-ordningen"},{"depth":2,"name":"Generell överföringsfunktion för återkopplat system","link":"Generell-overforingsfunktion-for-aterkopplat-system"},{"depth":1,"name":"Tillståndsmodeller","link":"Tillstandsmodeller"},{"depth":2,"name":"Linjärisering","link":"Linjarisering"},{"depth":3,"name":"Arbetsgång - Linjärisering","link":"Arbetsgang---Linjarisering"},{"depth":1,"name":"Tids- och frekvensplanet","link":"Tids--och-frekvensplanet"},{"depth":2,"name":"Första ordningens system","link":"Forsta-ordningens-system"},{"depth":2,"name":"Andra ordningens system","link":"Andra-ordningens-system"},{"depth":2,"name":"Bodediagram","link":"Bodediagram"},{"depth":3,"name":"Geometrisk tolkning","link":"Geometrisk-tolkning"},{"depth":3,"name":"Arbetsgång - Bodediagram","link":"Arbetsgang---Bodediagram"},{"depth":1,"name":"Stabilitet","link":"Stabilitet"},{"depth":2,"name":"Routh-Hurwitz","link":"Routh-Hurwitz"},{"depth":2,"name":"Rotort","link":"Rotort"},{"depth":2,"name":"Nyquist förenklade kriterium","link":"Nyquist-forenklade-kriterium"},{"depth":1,"name":"Principer för dimensionering","link":"Principer-for-dimensionering"},{"depth":2,"name":"Känslighetsfunktionen","link":"Kanslighetsfunktionen"},{"depth":2,"name":"Komplementära känslighetsfunktionen","link":"Komplementara-kanslighetsfunktionen"},{"depth":2,"name":"Störkänslighetsfunktionen","link":"Storkanslighetsfunktionen"},{"depth":2,"name":"Styrkänslighetsfunktionen","link":"Styrkanslighetsfunktionen"},{"depth":1,"name":"Dimensionering","link":"Dimensionering"},{"depth":2,"name":"P","link":"P"},{"depth":2,"name":"PI","link":"PI"},{"depth":3,"name":"Arbetsgång - PI","link":"Arbetsgang---PI"},{"depth":2,"name":"PD","link":"PD"},{"depth":3,"name":"Arbetsgång - PD","link":"Arbetsgang---PD"},{"depth":2,"name":"PID","link":"PID"},{"depth":3,"name":"Arbetsgång - PID","link":"Arbetsgang---PID"},{"depth":1,"name":"Alternativa designprinciper","link":"Alternativa-designprinciper"},{"depth":1,"name":"Dimensionering på tillståndsform","link":"Dimensionering-pa-tillstandsform"},{"depth":2,"name":"Tillståndsåterkoppling","link":"Tillstandsaterkoppling"},{"depth":3,"name":"Överföringsfunktioner","link":"Overforingsfunktioner"},{"depth":3,"name":"Arbetsgång - Tillståndsåterkoppling","link":"Arbetsgang---Tillstandsaterkoppling"},{"depth":1,"name":"Tidsdiskreta regulatorer","link":"Tidsdiskreta-regulatorer"},{"depth":1,"name":"Filter","link":"Filter"},{"depth":2,"name":"Frekvensselektiva filter","link":"Frekvensselektiva-filter"}]
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
y_\infty = \lim_{t \to \infty} y(t) = \lim_{s \to 0} sY(s) = \lim_{s \to 0} sG(0) \frac{u_0}{s} = G(0)u_0
$$

$$
\boxed{K = \frac{y_{\infty}}{u_0} = G(0)}
$$

## Kvarstående fel
Om vi betraktar följande system

$$
Y(s) = G_{ry}(s)R(s)
$$

och antar att systemet är stabilt kommer polerna för $ G_{ry}(s) $ att ligga i vänstra halvplanet. Vid ett referenssteg $ (R(s) = \frac{r_0}{s}) $ kommer det kvarstående felet bli

$$
\begin{aligned}
e_\infty &= \lim_{t \to \infty} e(t) = \lim_{s \to 0} sE(s) = \lim_{s \to 0} s(R(s) - Y(s)) \\
&= \lim_{s \to 0} s(1 - G_{ry}(s)) \frac{r_0}{s} = (1 - G_{ry}(0)) r_0
\end{aligned}
$$

För att $ e_\infty $ ska gå mot noll vid referenssteg krävs det att $ G_{ry}(0) = 1 $, d.v.s. den ***statiska förstärkningen*** måste vara lika med $ 1 $.

## Generell överföringsfunktion av första ordningen
$$
G(s) = \frac{K}{1 + Ts}
$$

## Generell överföringsfunktion av andra ordningen
Vi inför dessa beteckningar
* $ \omega_n $ ***odämpad svängningsfrekvens*** Ökat $ \omega_n $ ger ett större avstånd från origo och därmed snabbare stegsvar.
* $ \zeta $ ***dämpningskonstant*** Stegsvarets översväng minskar då dämpningen $ \zeta $ ökar.
* $ K $ ***statisk förstärkning***.

Vi kan då beskriva en generell överföringsfunktion av andra ordningen enligt

$$
G(s) = \frac{K\omega_n^2}{s^2 + 2\zeta \omega_ns + \omega_n^2} = \frac{K}{1 + \frac{2\zeta s}{\omega_n} + (\frac{s}{\omega_n})^2}
$$

## Generell överföringsfunktion för återkopplat system
Här är $ D(s) $ den funktion som erhålls då man går direkt från insignal till utsignal, medan $ L(s) $ är kretsöverföringen. $ L(s) $ erhålls genom att man bortser från insignaler och stegar ett varv genom återkopplingsslingan och slutligen multiplicerar med $ -1 $.

$$
\boxed{\frac{D(s)}{1 + L(s)}}
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

Vi kan sedan sätt in det i $ \dot x(t) $ och $ y(t) $ vilket ger oss

$$
\begin{aligned}
\dot x(t) &= f(x_0 + \varDelta x(t), u_0 + \varDelta u(t)) \\
&= f(x_0, u_0) + \frac{\partial f}{\partial x} |_{(x_0, u_0)} \cdot \varDelta x(t)
+\frac{\partial f}{\partial u} |_{(x_0, u_0)} \cdot \varDelta u(t) \\
\\
y_0 + \varDelta y(t) &= g(x_0 + \varDelta x(t), u_0 + \varDelta u(t)) \\
&= g(x_0, u_0) + \frac{\partial g}{\partial x} |_{(x_0, u_0)} \cdot \varDelta x(t)
+\frac{\partial g}{\partial u} |_{(x_0, u_0)} \cdot \varDelta u(t)
\end{aligned}
$$

De partiella derivatorna ges av dessa matrisnotationer
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

och följande linjära tillståndsmodeller erhålls

$$
\begin{aligned}
\varDelta \dot x(t) &= A \varDelta x(t) + B \varDelta u(t) \\
\varDelta y(t) &= C \varDelta x(t) + D \varDelta u(t) \\
\end{aligned}
$$

### Arbetsgång - Linjärisering

Betrakta följande tillståndsmodell på olinjär matrisform

$$
\begin{bmatrix}
    \dot x_1(t) \\
    \dot x_2(t) \\
    \dot x_3(t) \\
\end{bmatrix}
=
\begin{bmatrix}
    x_2(t) \\
    - \frac{k}{x_1^2(t)} + x_1(t)x_3^2(t)+u_1(t) \\
    - \frac{2x_2(t)x_3(t)}{x_1(t)} + \frac{u_2(t)}{x_1(t)} \\
\end{bmatrix}
$$

Linjärisering ger
$$
\varDelta \dot x(t) = A \varDelta x(t) + B \varDelta u(t)
$$
$$
\varDelta x(t) = x(t) - x_0
\qquad\qquad
\varDelta u(t) = u(t) - u_0 \\
\\
A = \frac{\partial f}{\partial x} |_{(x_0, u_0)}
\qquad\qquad
B = \frac{\partial f}{\partial u} |_{(x_0, u_0)}
$$

Beräkning av $ A $ och $ B $ ger
$$
A = \begin{bmatrix}
    0 & 1 & 0 \\
    \frac{2k}{x_{10}^3} + x_{30}^2 & 0 & 2x_{10}x_{30} \\
    \frac{2x_{20}x_{30}}{x_{10}^2} - \frac{u_{20}}{x_{10}^2} & - \frac{2x_{30}}{x_{10}} & -\frac{2x_{20}}{x_{10}}\\
\end{bmatrix}
$$

$$
B = \begin{bmatrix}
    0 & 0 \\
    1 & 0 \\
    0 & \frac{1}{x_{10}}
\end{bmatrix}
$$

Vid arbetspunkten antas jämvikt råda vilket ger
$$
f(x_0, u_0) = 0
$$
Uppgiften ger även $ u_{10} = u_{20} = 0 $ och $ x_{30} = 5 $. Vi får

$$
\begin{aligned}
x_{20} &= 0 \\
-\frac{k}{x_{10}^2} + x_{10}x_{30}^2 + u_{10} &= 0 \\
-\frac{2x_{20}x_{30}}{x_{10}} + \frac{u_{20}}{x_{10}} &= 0 \\
\end{aligned}
$$
vilket ger

$$
\begin{aligned}
x_{10} &= (\frac{k}{5^2})^\frac{1}{3} \\
x_{20} &= 0 \\
x_{30} &= 5 \\
\end{aligned}
$$

Sätt in detta i matriserna $ A $ och $ B $. Räkna ut $ C $ och $ D $ på liknande sätt och använd ekvationerna under sektionen [Tillståndsmodeller](#Tillstandsmodeller).

# Tids- och frekvensplanet
---
Dessa beteckningar införs
* $ Stigtiden \space t_r = $ den tid det tar för utsignalen att gå från 10% till 90% av slutvärdet.
* $ Insvängningstiden \space t_{5\%} = $ tidpunkten då utsignalen kommit inom $ 0.95y(\infty) < y(t) < 1.05y(\infty) $ för att inte gå utanför igen.
* $ Ekvivalent tidskonstant \space T_{63\%} = $ tidpunkten då utsignalen nått 63% av slutvärdet.

## Första ordningens system

För [första](#Generell-overforingsfunktion-av-forsta-ordningen) ordningens överföringsfunktion gäller att
$$
\begin{aligned}
&t_r = 2.20T \\
&t_{5\%} = 3.00T \\
&T_{63\%} = T \\
\end{aligned}
$$

## Andra ordningens system

För [andra](#Generell-overforingsfunktion-av-andra-ordningen) ordningens överföringsfunktion gäller

* För ***reella stabila poler***
$$
\begin{aligned}
&t_r \approx (2.2 + \alpha)T \\
&t_{5\%} \approx (3.0 + 1.6\alpha)T\\
&T_{63\%} \approx (1 + 1.1\alpha)T \\
\end{aligned}
$$

* För ***komplexkonjugerande stabila poler***
$$
\begin{aligned}
&t_r \approx \frac{1}{\omega_n} (1 + 0.3\zeta +  2\zeta^2) \\
&t_{5\%} \approx \frac{3}{a}\\
&T_{63\%} = e^{-\frac{\pi a}{\omega_d} } \\
\end{aligned}
$$

## Bodediagram
En överföringsfunktion på ***Bodeform*** ser ut
$$
G(s) = \frac{K}{S^m} \frac{C_1(s)C_2(s)\cdots C_k(s)}{D_1(s)D_2(s)\cdots D_\ell(s)}
$$

$ C_i(s) $ och $ D_i(s) $ kan anta

$$
\begin{aligned}
1 + \frac{s}{\omega_i} &\qquad första \space ordningen \\
1 + 2\zeta \frac{s}{\omega_i} + (\frac{s}{\omega_i})^2 &\qquad komplexkonjugerande \space polpar \\
e^{-\frac{s}{\omega_i}} &\qquad dödtid
\end{aligned}
$$

Genom att logaritmera $ G $ fås följande

$$
\begin{aligned}
\log_{10} | G | &= \log_{10} K - m\log_{10} \omega + \log_{10} | C_1 | + \cdots + \log_{10} | C_k | \\
&- \log_{10} | D_1 | - \cdots - \log_{10} | D_\ell |
\end{aligned}
$$

Faserna kan också adders enligt

$$
\begin{aligned}
\angle G = \angle K - m \cdot 90\degree + \angle C_1 + \cdots + \angle C_k - \angle D_1 - \cdots - \angle D_\ell
\end{aligned}
$$

### Geometrisk tolkning


### Arbetsgång - Bodediagram

1. Skriv överföringsfunktionen på ***Bodeform***
2. Rita lågfrekvensasymptoten $ \frac{K}{s^m} $
3. Asymptoten kommer därefter att ändras (pol ger negativt $ m_i $ medan nollställe ger positivt $ m_i $) vid varje brytfrekvens $ \omega_i $ enligt
    * $ (1 + \frac{s}{\omega_i})^{\pm m_i} $ ger en riktningsändring på $ \pm m_i \cdot 20 $ dB/dekad
    * $ (1 + 2\zeta \frac{s}{\omega_i} + (\frac{s}{\omega_i})^2)^{\pm m_i} $ ger en riktningsändring på $ \pm 2m_i \cdot 20 $ dB/dekad
4. Korrigering av kurvan enligt

    |Faktor| $ \frac{\omega_i}{2} $| $ \omega_i $ | $ 2\omega_i $ |
    | -    | -                | -       | -        |
    | $ (1 + \frac{s}{\omega_i})^{\pm m_i} $  | $ \pm 1m_i $ dB | $ \pm 3m_i $ dB | $ \pm 1m_i $ dB |
    | $ (1 + 2\zeta \frac{s}{\omega_i} + (\frac{s}{\omega_i})^2)^{\pm m_i} $ | $ \zeta $ beroende| $ \zeta $ beroende | $ \zeta $ beroende |
    För den $ \zeta $ beroende faktorn ovan kommer det att uppstå en allt mer markant "topp" vid brytfrekvensen ju mindre $ \zeta $ är.
5. Rita faskurvan genom att addera de ingående faktorernas fasbidrag.


# Stabilitet
---
Ett linjärt system är stabilt när alla rötter till den ***karakteristiska ekvationen*** är negativa, d.v.s. när alla rötter för nämnaren ligger i vänstra halvplanet. Vi kan beteckna detta polynom $ A(s) $ enligt

$$
G(s) = \frac{b_1s^{n-1}+\cdots+b_n}{s^n+a_1s^{n-1}+\cdots+a_n} = \frac{B(s)}{A(s)}
$$

För ett återkopplat system ges kretsöverföringen av $ L(s) = G(s)F(s) $ och överföringsfunktionen från $ r $ till $ y $ kan uttryckas

$$
G_{ry} = \frac{L(s)}{1 + L(S)}
$$

Således bestäms polerna till denna överföringsfunktion av $ 1 + L(s) $. För att ett återkopplat system ska vara stabilt krävs det också att man beakar kancellation av poler. Ett återkopplat system sägs därför vara stabilt om
* instabila poler och nollställen i processen inte kancelleras bort av regulatorn, d.v.s. ingen kancellation för ske i kretsöverföringen. De uppkommer i andra kombinationer t.ex. $ G_{vy} $ och $ G_{ru} $ vilka då får instabila poler eller nollställen.
* samtliga överföringsfunktioner är stabila oavsett kombination, systemet kallas då ***internt stabilt***, vilket endast är möjligt att poler och nollställen som kancelleras i kretsöverföringen är stabila.

## Routh-Hurwitz
Denna teknik är bara att använda om inte $ 1 + L(s) $ lätt kan faktoriseras eller om polynomet innehåller fria variabler.
Om den karakteristiska ekvationen ges av

$$
a_0s^n + a_1s^{n-1} + a_2s^{n-2} + \cdots = 0
$$

kan koefficienterna införas i denna tablå

 | $ s^n $ | $ a_0 $ | $ a_2 $ | $ a_4 $ | $ a_6 $ | $ \cdots $ |
 | -    | -                | -       | -        | - | - |
 | $ s^{n-1} $ | $ a_1 $ | $ a_3 $ | $ a_5 $ | $ a_7 $ | $ \cdots $ |
 | $ s^{n-2} $ | $ c_0 $ | $ c_1 $ | $ c_2 $ | $ c_3 $ | $ \cdots $ |
 | $ s^{n-3} $ | $ d_0 $ | $ d_1 $ | $ d_2 $ | $ d_3 $ | $ \cdots $ |
 | $ \vdots $ | $ \vdots $ | $ \vdots $ | $ \vdots $ | $ \vdots $ | |
 | $ s_0 $ | | | | | |

 där

 $$
 c_0 = \frac{a_1a_2 - a_3a_0}{a_1} \qquad c_1 = \frac{a_1a_4 - a_5a_0}{a_1} \qquad d_0 = \frac{c_0a_3 - c_1a_1}{c_0}
 $$

Nödvändiga villkor för stabilitet är
* Alla koefficienter måste vara positiva. (Dock inte tillräckligt villkor)
* Alla koefficienter i första kolumnen måste vara positiva. (Tillräckligt villkor)

## Rotort
[Rotorten](https://sv.wikipedia.org/wiki/Reglerteknik#Rotortanalys) visar om system blir instablit för olika värden på $ K $, men visar också systemets karaktär, d.v.s. om systemet är snabbt, långsamt, oscillerande eller dämpat.

## Nyquist förenklade kriterium
Stabiliteten för kretsöverföring med dödtid kan inte bestämmas med Routh-Hurwitz eller med rotort utan det krävs att man använder ***Nyquists förenklade kriterium***.

# Principer för dimensionering
---
Dimensionering av regulatorer kan sammanfattas enligt följande punkter
* hög grad av återkoppling (hög förstärkning) i kretsöverföringen $ L $ ger god följning av referenssignaler samt effektiv kompensering av processtörningar. Mätstörningar kompenseras ej.
* låg grad av återkoppling (låg förstärkning) i kretsöverföringen $ L $ kompenserar mätstörningen väl. Referenssignaler följs ej och processtörningar kompenseras inte.
* Mätstörningar är högfrekventa och bör reduceras där efter.
* Kompensering av processtörningar och följning av referenssignaler är viktigare för lägre frekvenser, då det inte är lika intressant att kompensera för högfrekventa snabba störningar eftersom det skulle leda till ett ryckigt system. Det är däremot viktigt att hålla nere högfrekvensförstärkningen $ ( K_\infty = K_p, s \to \infty ) $ så att styrsignalsaktiviteten begränsas för högfrekventa mätstörningar för att undvika slitage.

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

# Dimensionering
---
Dessa beteckningar införs
$$
\begin{aligned}
K_p &= proportionell förstärkning \\
T_i &= integraltidskonstant \\
T_d &= derivatatidskonstant \\
K_i &= \frac{K_p}{T_i} \\
K_d &= K_p T_d \\
\angle G(j\omega_{G150}) &= -150 \degree
\end{aligned}
$$

Vi utgår ifrån önskad överkorsningsfrekvens $ \omega_c $ vilket ger följande

$$
| L(j\omega_c) |  = 1
\qquad\qquad
\angle L(j\omega_c) = -180 \degree + \varphi_m
$$

Det innebär att
$$
| F(j\omega_c) | = \frac{1}{| G(j\omega_c) |}
$$
$$
\angle F(j\omega_c) = -180 \degree + \varphi_m - \angle G(j\omega_c)
$$

Notis: Om $ G(s) = Ae^{-Bs} $ finns i något av polynomen, var noga med
$$
\angle G(j\omega_c) = (- B \omega_c \frac{180}{\pi}) \degree \qquad | G(j\omega_c) | = A
$$

## P
$$
F_{P}(s) = K_p
$$

## PI
Kostnaden som PI-regulatorn måste betala för de positiva statiska egenskaperna är att den negativa fasvridningen $ \angle F_{PI}(j\omega) \approx -90 \degree $ för små $ \omega $. För högre frekvenser är fasvridningen försumbar men kan resultera i stabilitetsproblem för lägre frekvenser.
$$
F_{PI}(s) = K_p(1 + \frac{1}{T_is}) = K_p + \frac{K_i}{s} = K_i \frac{1 + T_i}{s}
$$

### Arbetsgång - PI
För önskad fasmarginal $ \varphi_m $ och överkorsningsfrekvens $ \omega_c $ och antagandet att

$$
\angle F_{PI}(j\omega_c) = -180 \degree + \varphi_m - \angle G(j\omega_c)
$$

är bestämd så följer

$$
\begin{aligned}
T_i &= \frac{1}{\omega_c \tan (- \angle F_{PI}(j\omega_c) )} \\
\\
K_i &= \frac{\omega_c}{|G(j\omega_c)| \sqrt{1 + (\omega_c T_i)^2}}
\end{aligned}
$$

## PD
Derivataverkan införs för att öka snabbheten hos det återkopplade systemet. En PD-regulator ger ett positiv fasbidrag vilket används för att lyfta faskurvan tillräckligt för att nå önskad fasmarginal $ \varphi_m $.
En ideal PD-regulator ges av följande
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

### Arbetsgång - PD
För önskad fasmarginal $ \varphi_m $ och överkorsningsfrekvens $ \omega_c $ söker vi parameterkombinationen $ \tau_d $ och $ b $ som ger det önskade faslyftet. Fasvridningen erhålls enligt

$$
\angle F_{PI}(j\omega_c) = -180 \degree + \varphi_m - \angle G(j\omega_c)
$$

Maximalt faslyft ges av $ \varphi_{max} = \max \angle F_{PD}(j\omega) $ och inträffar vid $ \omega_m =  \frac{\sqrt b}{t_d} $. Vi får att
$$
b = \frac{ 1 + \sin \varphi_{max} }{ 1 - \sin \varphi_{max}}
$$

För att minimera $ b $ och samtidigt erhålla maximalt faslyft sätts $ \omega_m = \omega_c $. Ett annat val kräver ett högre $ b $ för att erhålla faslyftet $ \angle F_{PD}(j\omega_c) $. Då får vi
$$
 \varphi_{max} = \angle F_{PD}(j\omega_c) \qquad \tau_d = \frac{\sqrt b}{\omega_c}
$$

Genom utnyttjandet av $ | L(j\omega_c) | = 1 $ bestäms $ K_p $ enligt

$$
K_p = \frac{1}{| G(j\omega_c) | \sqrt b}
$$


## PID
$$
F_{PID}(s) = K_p(1 + \frac{1}{T_is} + T_ds) = K_p + \frac{K_i}{s} + K_ds
$$

### Arbetsgång - PID
Vid handräkning används grafiska lösningar, annars gäller numeriska lösningar via dator.


# Alternativa designprinciper
---

# Dimensionering på tillståndsform
---
Följande tillståndsmodell på diagonalform
$$
\begin{aligned}
\begin{bmatrix}
    \dot x_1 \\
    \dot x_2 \\
\end{bmatrix}
&=
\begin{bmatrix}
    -a_1 & 0 \\
    0 & -a_2 \\
\end{bmatrix}
\begin{bmatrix}
    x_1 \\
    x_2 \\
\end{bmatrix}
+
\begin{bmatrix}
    b_1 \\
    b_2 \\
\end{bmatrix}
u \\
\\
y &= \begin{bmatrix}
    c_1 & c_2 \\
\end{bmatrix}
\begin{bmatrix}
    x_1 \\
    x_2 \\
\end{bmatrix}
\end{aligned}
$$
är styrbart och observerbart då konstanterna $ b_1, b_2, c_1 $ och $ c_2 $ är skilda från noll samt $ a_1 $ och $ a_2 $ är unika.

## Tillståndsåterkoppling
Ett viktigt krav för tillståndsåterkoppling är att systemet är styrbart för att erhålla önskad polplacering. Ett system på tillståndsform är givet enligt

$$
\begin{aligned}
\dot x(t) &= Ax(t) + Bu(t) + B_vv(t) \\
y(t) &= Cx(t)
\end{aligned}
$$
Störsignalen $ v $ adderas till insignalen $ u $ vilket gör att styrsignalen blir $ B_v = B $. En styrlag införs
$$
u(t) = -L_ux(t) + K_rr(t)
$$
där
$$
L_u = \begin{bmatrix}
    \ell_1 & \ell_2 & \cdots & \ell_n \\
\end{bmatrix}
$$

Det slutna systemets poler ges av
$$
\alpha_c(s) = \det (sI - A + BL_u)
$$

### Överföringsfunktioner

Överföringsfunktionen från referenssignalen $ r $ till utsignalen $ y $ bestäms enligt
$$
G_{ry}(s) = C(sI - A + BL_u)^{-1} BK_r
$$

Förstärkningskonstanten $ K_r $ bestäms så att $ G_{ry}(0) = 1 $, d.v.s. så att lågfrekvensförstärkningen blir 1, enligt
$$
K_r = \frac{1}{C(- A + BL_u)^{-1} B}
$$

Överföringsfunktionen från störsignalen $ v $ till utsignalen $ y $ bestäms enligt
$$
G_{vy}(s) = C(sI - A + BL_u)^{-1} B_v
$$

Överföringsfunktionen från referenssignalen $ r $ till styrsignalen $ u $ bestäms enligt
$$
G_{ru}(s) = -L_u (sI - A + BL_u)^{-1} BK_r + K_r
$$

Kretsöverföringen $ L(s) $ erhålls genom att bryta upp återkopplingsslingan vid styrsignalen $ u $ enligt
$$
L(s) = L_u(sI - A)^{-1} B
$$

### Arbetsgång - Tillståndsåterkoppling
Följande återkopplade system med matriserna
$$
A = \begin{bmatrix}
    0 & 1 \\
    -2 & -1 \\
\end{bmatrix}
\qquad
B = \begin{bmatrix}
    -1 \\
    2  \\
\end{bmatrix}
\qquad
C = \begin{bmatrix}
    4 & 0 \\
\end{bmatrix}
$$
är givet. För att dimensionerna det återkopplade systemet så att poler i $ s = -1 $ och $ s = -2 $ erhålls, söker vi
$$
\alpha_c(s) = (s + 1)(s + 2) = \det (sI - A + BL_u)
$$
Vi får
$$
\begin{aligned}
\det (sI - A + BL_u) &=
\det (
\begin{bmatrix}
    s & 0 \\
    0 & s \\
\end{bmatrix}
- \begin{bmatrix}
    0 & 1 \\
    -2 & -1 \\
\end{bmatrix}
+ \begin{bmatrix}
    -1 \\
    2  \\
\end{bmatrix}
\begin{bmatrix}
    \ell_1 & \ell_2 \\
\end{bmatrix} ) \\
&=
\det (
\begin{bmatrix}
    s - \ell_1 & -1-\ell_2 \\
    2+2\ell_1 & s+1+2\ell_2 \\
\end{bmatrix} \\
&=
(s - \ell_1)(s + 1 + 2\ell_2) + (1 + \ell_2)(2 + 2\ell_1)
\end{aligned}
$$

Lös därefter ut $ \ell_1 $ och $ \ell_2 $ genom att sätta

$$
\alpha_c(s) = (s - \ell_1)(s + 1 + 2\ell_2) + (1 + \ell_2)(2 + 2\ell_1)
$$


# Tidsdiskreta regulatorer
---

# Filter
---
* Frekvensselektiva filter - ändrar frekvensinnehållet i en signal.
* Prediktering - förutsäger kommande värden hos en signal.
* Glättning (smoothing) - minskar brusstörningar.