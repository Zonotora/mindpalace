---
slug: /bandits
tags: ["wip"]
lastModified: 2022-04-05
created: 2022-03-26
title: Bandits
header: [{"depth":1,"name":"Notation","link":"Notation"},{"depth":1,"name":"Stochastic bandits","link":"Stochastic-bandits"},{"depth":2,"name":"IID rewards","link":"IID-rewards"},{"depth":2,"name":"Regret","link":"Regret"},{"depth":2,"name":"Non-adaptive exploration","link":"Non-adaptive-exploration"},{"depth":3,"name":"Uniform exploration","link":"Uniform-exploration"},{"depth":3,"name":"Epsilon greedy","link":"Epsilon-greedy"},{"depth":2,"name":"Adaptive exploration","link":"Adaptive-exploration"},{"depth":3,"name":"Higher-confidence elimination","link":"Higher-confidence-elimination"},{"depth":3,"name":"Successive elimination","link":"Successive-elimination"},{"depth":3,"name":"Optimism under uncertainty","link":"Optimism-under-uncertainty"},{"depth":2,"name":"Regret bound terminology","link":"Regret-bound-terminology"},{"depth":1,"name":"Bayesian bandits","link":"Bayesian-bandits"}]
---

# Notation
| Definition | Description |
|-| :---- |
| $ \mathcal A $ | The action space. |
| $ \mathcal A^+ = \{ a: \mu (a) < \mu(a^*) \} $ | All the arms that contribute to the regret. |
| $ a $ | Arm/action. |
| $ T $ | Total number of rounds. |
| $ t $ | Each round. |
| $ \mu (a) = \mathbb E[ \mathcal D_a] $ | The mean reward for the arm $ a $. |
| $ \mu^* = \max_{a \in \mathcal A} \mu (a) $ | The optimal mean reward. |
| $ \bar \mu $ | The average reward |
| $ \Delta (a) = \mu^* - \mu (a) $ | Describes how **bad** arm $ a $ is compared to the best arm. Called **gap**. |
| $ R(T) = \mu^* \cdot T - \sum_{t=1}^T \mu(a_t) $ | The regret for an algorithm. |
| $ r (a) = \sqrt{\frac{2 \log T}{N}}    $ | The confidence radius |
| $ n_t(a) $ | The number of samples from arm $ a $ up to round $ t $ |
| $ r_t (a) = \sqrt{\frac{2 \log T}{n_t (a)}}    $ | The confidence radius |
| $ [ \mu_n - r_n, \mu_n + r_n ] $ | The confidence interval |

# Stochastic bandits

Multi-armed bandits is a framework for algorithms that make decisions under uncertainty over time. At its core an algorithm has $ K $ different possible actions to choose from called **arms** in $ T $ rounds. The algorithm chooses an arm each round and retrieves a reward given the arm. The reward follows a distribution that only depends on the chosen arm. Typically, the algorithm only observes one arm each round and therefore needs to explore different arms to acquire new information. There is a tradeoff between exploration and exploitation. There are three different types of feedback that the algorithm receives after each round based on the reward given a certain arm. These are: **bandit feedback**, **partial feedback**, **full feedback**.


## IID rewards
A basic model with independently and identically distributed (IID) rewards, called **stochastic bandits**, is given by the following algorithm:

```
Given: K arms, T rounds
    for each round t ∈ T
        pick arm a_t
        observe reward r_t ∈ [0, 1] for a_t
```

Here we want to maximize the total reward over $ T $ rounds. When the algorithm only observes the reward for the currently selected arm in one round we call it **bandit feedback**. We denote the reward distribution for each arm $ a \in \mathcal A $ as $ \mathcal D_a $. The reward is randomly sampled from this distribution each time arm $ a $ is picked. The distribution for each arm is unknown for the algorithm. The rewards are bounded in each round $ r_t \in [0, 1] $ to ease the calculations. Especially important is the **mean reward vector** $ \mu \in [0, 1]^K $. We have that $ \mu (a) = \mathbb E[ \mathcal D_a] $ and the best mean value is given by $ \mu^* = \max_{a \in \mathcal A} \mu (a) $.


## Regret

The **regret** is a function of $ T $ and measures the algorithms cumulative reward of always playing the optimal in relation to the cumulative reward of a playing the best arms of a specific problem set up to round $ T $. It is denoted as:
$$
R(T) = \mu^* \cdot T - \sum_{t=1}^T \mu(a_t)
$$

We note that $ R(T) $ is a stochastic variables as the arm $ a_t $ chosen at $ t $ is randomly sampled. We call it regret as the algorithm "regrets" not knowing the best arm.


## Non-adaptive exploration
There are two different ways we can explore, either based on the history of rewards or in some fixed way. When basing the exploration in some fixed way the exploration phase does not adapt during its execution and is therefore called **non-adaptive**.


### Uniform exploration

One way to choose arms is to pick them uniformly regardless of previous results. Then we pick the arms that empirically perform best for exploitation. The algorithm has the following structure:

```
Exploration:
    try each arm N times
Selection:
    pick the arm a* with the highest average reward
Exploitation:
    play a* for the rest of the rounds
```

The parameter $ N $ is fixed here, but we will see that we can pick a value that is dependent on $ T $ and $ K $ to minimize the regret. The average reward should be a good estimate of the true reward, $ | \bar \mu (a)  - \mu (a)|  $. By utilizing the @(Hoeffding inequality)(hoeffding's-inequality) we can write

$$
\Pr \{ | \bar \mu (a)  - \mu (a)| \leq r(a) \} \geq 1 - \frac{2}{T^4}
$$
where we define $ r(a) = \sqrt{\frac{2 \log T}{N}} $. A **clean event** is the event where this equation holds for all arms simultaneously. A **bad event** is the complement of the clean event. If $ K = 2 $ and we have a clean event. Let $ a^* $ be the best arm. If the algorithm chooses the other arm $ a $ it must be because it has better average reward than $ a^* $. We have $ \bar \mu (a) > \bar \mu (a^*) $. We rearrange the equation according to the clean event equation we got from the Hoeffding inequality. Thus, we have:
$$
\mu (a^*) - \mu (a) \leq r(a) + r(a^*) = O(\sqrt{\frac{\log T}{N}})
$$
This means that we have at most $ O(\sqrt{\frac{\log T}{N}}) $ regret each round for the exploitation phase. The exploration have at most 1 regret each round. To derive an upper bound we acknowledge that the first $ N $ rounds are used for exploration and the remaining $ T - 2N $ rounds are used for exploitation.

$$
R(T) \leq \underbrace{N}_{\text{exploration}} + \underbrace{O(\sqrt{\frac{\log T}{N}} \times (T - 2N))}_{\text{exploitation}}
$$
Setting $ N = T^{2/3} (\log T)^{1/3} $ we get the following:

$$
R(T) \leq O(T^{2/3} (\log T)^{1/3})
$$

In the case we have a bad event we have the following:

$$
\begin{aligned}
\mathbb E[R(T)] &= \mathbb E[R(T) \mid \text{clean event}] \times \Pr[\text{clean event}] + \mathbb E[R(T) \mid \text{bad event}] \times \Pr[\text{bad event}] \\
&\leq \mathbb E[R(T) \mid \text{clean event}] + T \times O(T^{-4}) \\
&\leq O(\sqrt{\log T} \times T^{2/3})
\end{aligned}
$$

When we have $ K > 2 $, we have the same argument but instead we get $ R(T) \leq NK + O(\sqrt{\frac{\log T}{N}} \times T ) $ . We can set $ N = (T/K)^{2/3} (\log T)^{1/3} $ to achieve the same result.

### Epsilon greedy
One drawback with this algorithm is that it has poor performance during the exploration phase. The $ \epsilon $-greedy algorithm does not have this issue:
```
for each round t ∈ T:
    e_t <- uniform probability
    if e_t <= threshold:
        explore
    else:
        exploit
```
With the exploration probability of $ \epsilon_t  = t^{-1/3} \cdot (K \log t)^{1/3} $ we get the regret bound $ \mathbb E [ R(t) ] \leq t^{2/3} \cdot O(K \log t)^{1/3}$ for each round $ t $.
However, both these algorithms do not depend on the history of the observed rewards in the exploration phase. We could do better.

## Adaptive exploration
We could react directly on the history of rewards to select more suitable candidates for exploration. This is called **adaptive** exploration. To define this framework of adaptive exploration we let $ n_t (a) $ be the number of samples from an arm $a$ in the rounds $ 1, \dots, t $. Here we let $ \bar{\mu_t} $ be the average reward of the arm $ a $ this far. Again with the help of the Hoeffding inequality we want to derive


$$
\Pr \{ | \bar \mu_t (a)  - \mu (a)| \leq r_t (a) \} \geq 1 - \frac{2}{T^4}
$$
where we define $ r_t(a) = \sqrt{\frac{2 \log T}{n_t (a)}} $. Here $ r_t (a) $ is called the **confidence radius**. In the case $ n_t (a) $ is fixed we have the same scenario as in the uniform case, but $ n_t (a) $ is a random variable so it cannot be fixed. The samples from $ a $ is not completely independent either, because $ n_t $ may depend on previous rewards of $a$. To build a solid argumentation we introduce something called a **reward tape**, that is, a $ 1 \times T $ table where each cell is independently sampled from $ \mathcal D_a $. The $ j $th time an arm $ a $ is drawn the reward is taken from the $ j $th cell in the arm's reward tape. We let $ \bar v_j (a)$ be the average reward for arm $ a $ in the first $ j $ times that it is drawn. By the Hoeffding inequality we have

$$
\forall j \quad \Pr \{ | \bar v_j (a)  - \mu (a)| \leq r_t (a) \} \geq 1 - \frac{2}{T^4}
$$


With the help of the @(Boole's inequality)(boole's-inequality) we get

$$
\Pr \{ \forall a \forall j \quad  | \bar v_j (a)  - \mu (a)| \leq r_t (a) \} \geq 1 - \frac{2}{T^2}
$$

The following is implied and is the **clean event** in the following derivations

$$
\begin{aligned}
\mathcal E &:= \{ \forall a \forall t \quad  | \bar v_j (a)  - \mu (a)| \leq r_t (a) \} \\
\Pr[ \mathcal E ] &\geq 1 - \frac{2}{T^2}
\end{aligned}
$$
The **Upper Confidence Bound (UCB)** is defined as
$$
\text{UCB}_t = \bar \mu_t (a) + r_t (a)
$$

The **Lower Confidence Bound (UCB)** is defined as
$$
\text{UCB}_t = \bar \mu_t (a) + r_t (a)
$$

for an arm $ a $ at the round $ t $. The **confidence interval** is given by $ [\text{LCB}_t, \text{UCB}_t (a)] $.

### Higher-confidence elimination
We can now introduce the first algorithm based on this framework. Namely the **higher-confidence elimination** algorithm. The idea here is that we alternate between arms until we find an arm that is much better than the other.

```
while alternating between arm a and a'
    if UCB_t(a) < LCB_t(a') and round t is even
        abandon arm a and use a' forever
```

Higher-confidence elimination has a regret of
$$
\mathbb E [R(t)] = O(\sqrt {t \log T}), \quad \forall t \leq T
$$

### Successive elimination
The higher-confidence elimination algorithm operates on $ K = 2 $. **Successive elimination** generalizes to $ K > 2 $.

```
set all arms to active state
    for each phase
        try all active arms (multiple phases)
        deactivate all arms a such that UCB_t(a) < LCB_t(a') for some a'
```

Successive elimination has a regret of
$$
\mathbb E [R(t)] = O(\sqrt {K t \log T}), \quad \forall t \leq T
$$

### Optimism under uncertainty
An algorithm that picks the best possible observation this far is called **UCB1**. The arm chosen in each round is picked either because the average reward $ \bar \mu_t(a) $ for that arm is large or because the confidence interval $ r_t(a) $ is large (meaning that the arm has not been explored that much).

```
try each arm once
    for each round t ∈ T
        pick argmax_a∈A UCB_t(a)
```
where $ \text{UCB}_t = \bar \mu_t (a) + r_t (a) $

##  Regret bound terminology
If we have a regret bound on the form $ C \cdot f(T) $, where $ f(\cdot) $ does not depend on the mean rewards $ \mu $ and the constant $ C $ does not depend on $ T $ we call this regret bound **instance-dependent** if $ C $ does depend on $ \mu $ and **instance-independent** otherwise.



# Bayesian bandits