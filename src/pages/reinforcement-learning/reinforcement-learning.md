---
slug: /reinforcement-learning/reinforcement-learning
tags: ["wip"]
lastModified: 2022-05-27
created: 2022-04-28
title: Reinforcement Learning
header: [{"depth":1,"name":"Notation","link":"Notation"},{"depth":1,"name":"Finite Markov Decision Processes","link":"Finite-Markov-Decision-Processes"},{"depth":2,"name":"Rewards","link":"Rewards"},{"depth":2,"name":"Policy","link":"Policy"},{"depth":2,"name":"Value function","link":"Value-function"},{"depth":2,"name":"Bellman equation","link":"Bellman-equation"},{"depth":2,"name":"Optimality","link":"Optimality"},{"depth":3,"name":"Bellman optimality equation","link":"Bellman-optimality-equation"},{"depth":1,"name":"Dynamic programming","link":"Dynamic-programming"}]
---

# Notation
| Definition | Description |
|-| :---- |
| Agent | The decision maker in the defined environment. |
| $ \mathcal E $ | The environment which the agent can interact with. |
| $\mathcal S$ | The state space which is all the possible states for the agent in the current environment.|
| $ S_t  \in \mathcal S$ | The state of the agent at time step $ t $ in the environment. |
| $ \mathcal A(s) $ | The action space for the agent given a specific state. |
| $ A_t \in \mathcal A(s)$ | The action the agent selects at the time step $ t $. |
| $ \mathcal R \sub \R$ | The reward space for the agent in the environment. |
| $ R_{t+1} \in \mathcal R $ | The reward the agent receives from the environment as a result of its action at time step $ t $. |
| $ G_t = R_{t+1} + R_{t+2} + \dots + R_{t+T} $ | The expected return the agent seeks to maximize. |
| Episodes | The agent-environment interaction broken up into subsequences. Each episode ends in a state called terminal state. The next episode begins independently of the previous episode. |
| Terminal state | An end state in a given episode. |
| Episodic tasks | The case where the agent-environment interaction naturally breaks up into identifiable episodes. |
| Continuing tasks |  The case where the agent-environment interaction does not naturally break up into identifiable episodes. |
| Discount | A factor that determines how much weight future rewards should be given. |
| Policy | A certain way the agent acts. |

# Finite Markov Decision Processes
The **agent** and **environment** interact continually where each action the agent takes, the environment responds with a new scenario for the agent to react upon. To guide the agent throughout the environment, different rewards are given to the agent depending on how good an action was in a given state.
The agent tries to maximize its action over time in terms of rewards. We can look at the interaction between the agent and the environment as a series of discrete time steps $ t = 1,\dots $ and at each time step the agent is placed in some state of the environment given previous action decisions from the agent and responses from the environment.

In a finite Markov decision process all sets are finite, e.g. $ (\mathcal S, \mathcal A, \mathcal R) $ all have a finite set of elements. We can define the probability of an agent from moving from one state to another in the following way

$$
p(s',r \mid s, a) = \Pr (S_t = s', R_t = r \mid S_{t-1} = s, A_{t-1} = a)
$$
Thus given an action and state at time step $ t-1 $ we can deduce the probability for that agent of moving to the state $ s' $ with the reward $ r $. We notice that the probability only depends on the last action and state. The state includes all information necessary for the agent's future interaction with the environment. This is called the **Markov property**. The following holds
$$
\sum_{s' \in S} \sum_{r \in \mathcal R} p(s',r \mid s, a) = 1
$$

The **state-transition** probabilities represent the probability of moving from on state to another and are defined like follows
$$
p(s'\mid s, a) = \Pr (S_t = s' \mid S_{t-1} = s, A_{t-1} = a) = \sum_{r \in \mathcal R} p(s',r \mid s, a)
$$

The expected reward is defined as follows

$$
r(s,a) = \mathbb E [ R_t \mid S_{t-1} = s, A_{t-1} = a] =  \sum_{r \in \mathcal R} r \sum_{s' \in S} p(s',r \mid s,a)
$$

One of the key aspects that distinguishes reinforcement learning methods from other approaches when approximately solving MDPs is that reinforcement learning algorithms focus more on making good decision for frequently encountered states at the expense of almost ignoring infrequently encountered states.

## Rewards
Defining rewards for an environment could be hard. The reward is the signal communicated to the agent so that the agent are able to learn and optimize its goal. We should not define sub-goals as they tend to make the agent lose interest of its real goal. That is, we should define **what** we want the agent to achieve, and not **how** we want the agent to achieve it.
To be more formal we define the **expected return**.
$$
G_t = R_{t+1} + R_{t+2} + \dots + R_{t+T}
$$

which makes sense in applications with an actual final time step $ T $.
In cases where the agent-environment interaction does not break naturally into identifiable episodes we need to introduce the concept of **discounting** to get a well defined expected return. We call this the expected **discounted return**. It is defined as follows
$$
G_t = R_{t+1} + \gamma R_{t+2}  + \gamma^2 R_{t+3} + \dots  = \sum_{k=0}^\infty \gamma^k R_{t+k+1}
$$
where $ 0 \leq \gamma \leq 1 $ is called the **discount rate**. The discount rate controls how many the agent should value immediate rewards versus future rewards.
When $ \gamma = 0 $ the agent only cares about immediate rewards, and when $ \gamma $ approaches 1, future rewards are valued higher. One interesting note about the return is defined is

$$
\begin{aligned}
G_t &= R_{t+1} + \gamma R_{t+2}  + \gamma^2 R_{t+3} + \dots  \\
&= R_{t+1} + \gamma (R_{t+2}  + \gamma R_{t+3} + \dots ) \\
&= R_{t+1} + \gamma G_{t+1}
\end{aligned}
$$


This is an important concept for the theory and algorithms of reinforcement learning. If the reward is constant we have
$$
G_t = \sum_{k=0}^\infty \gamma^k = \frac{1}{1- \gamma}
$$

## Policy
A policy maps states to probabilities. An agent that follows a certain policy $ \pi $ at time $ t $ will have the probability $ \pi (a \mid s) $ of moving to a new state where $ A_t = a $ and $ S_t = s $. The agents policy is changed as a result of its experience.

## Value function
Value functions are central to almost all reinforcement learning algorithms. A value function is a function that estimate how good (in terms of rewards, more precisely the expected return) state-action pairs are for the agent. The value function is defined with respect to a certain policy, that is, a certain way of acting. The value function is denoted $ v_\pi (s) $ to indicate that is under the influence of a policy $ \pi $ for a given state $ s $. It represents the expected return of following the policy $ \pi $ when starting at the state $ s $. Formally it is defined as
$$
v_\pi (s) = \mathbb E [G_t \mid S_t = s] = \mathbb E_\pi \bigg [ \sum_{k=0}^\infty \gamma ^k R_{t+k+1} \mid S_t = s \bigg] \quad \forall s \in \mathcal S
$$
We also denote the value of taking action $ a $ in state $ s $ under the influence of the policy $ \pi $ as
$$
q_\pi (s,a) = \mathbb E_\pi [G_t \mid S_t = s, A_t = a] = \mathbb E_\pi \bigg [ \sum_{k=0}^\infty \gamma ^k R_{t+k+1} \mid S_t = s, A_t = a \bigg ]
$$
This is called the **action-value** function for policy $ \pi $.
Both $ v_\pi $ and $ q_\pi $ can be estimated by experience.
If an agent follows a policy $ \pi $ and maintains the average return for that state, the agent's average will converge to the states's value.
Estimation methods like this is called **Monte-carlo methods** as they involve averaging over many random samples of actual returns.

## Bellman equation
The following is called the **Bellman equation**

$$
\begin{aligned}
v_\pi (s) &= \mathbb E_\pi [ G_t \mid S_t = s] \\
&= \mathbb E_\pi [ R_{t+1} + \gamma G_{t+1} \mid S_t = s] \\
&= \sum_a \pi (a\mid s)  \sum_{s'} \sum_r p(s', r \mid s, a) \bigg [r + \gamma \mathbb E_\pi [G_{t+1} \mid S_{t+1} = s'] \bigg] \\
&= \sum_a \pi (a\mid s)  \sum_{s',r} p(s', r \mid s, a) \bigg [r + \gamma v_\pi (s') \bigg] \quad \forall s \in \mathcal S \\
\end{aligned}
$$


## Optimality

A policy $ \pi $ is defined to be better than or equal another policy $ \pi' $ if the expected return is greater than or equal to that of $ \pi' $ for all states. Formally
$$
\pi \geq \pi' \quad \text{if and only if } v_\pi(s) \geq v_{\pi'} (s) \quad \forall s \in \mathcal S
$$

The **optimal policy** $ \pi_* $ is one that is better than or equal to all other polices. We can be sure that there always exists at least one such policy, but there may be more than one. All optimal policies share the same state-value function $ v $. This function is the optimal state-value function $ v_* $ and formally
$$
v_* (s) = \underset{\pi}{\max} \,\, v_\pi (s) \quad \forall s \in \mathcal S
$$
Likewise they also share the same action-value function $ q $. This function is the optimal action-value function $ q_* $ and formally
$$
q_* (s,a) = \underset{\pi}{\max} \,\, q_\pi (s,a) \quad \forall s \in \mathcal S, \forall a \in \mathcal A(s)
$$
We can write $ q_* $ in terms of $ v_* $
$$
q_* (s,a) = \mathbb E [R_{t+1} + \gamma v_* (S_{t+1}) \mid S_t = s, A_t = a ]
$$

### Bellman optimality equation
The **Bellman optimality equation** states that the value of a state under the influence of a policy must be equal to the expected return for the best action from that state
$$
\begin{aligned}
v_*(s) &= \underset{a\in \mathcal A(s)}{\max} \,\, q_{\pi_*} (s,a) \\
&= \underset{a}{\max} \,\, \mathbb E_{\pi_*}[G_t \mid S_t = s, A_t = a] \\
&= \underset{a}{\max} \,\, \mathbb E_{\pi_*} [R_{t+1} + \gamma G_{t+1} \mid S_t = s, A_t = a] \\
&= \underset{a}{\max} \,\, \mathbb E [R_{t+1} + \gamma v_*(S_{t+1}) \mid S_t = s, A_t = a] \\
&= \underset{a}{\max} \,\, \sum_{s',r} p(s', r \mid s,a) [r + \gamma v_* (s')]
\end{aligned}
$$
Similarly we can write the Bellman optimality equation for $ q_* $
$$
\begin{aligned}
q_* (s,a) &= \mathbb E[R_{t+1} + \gamma \underset{a'}{\max} \,\, q_*(S_{t+1}, a') \mid S_t = s, A_t = a] \\
&= \underset{a}{\max} \,\, \sum_{s',r} p(s', r \mid s,a) [r + \gamma \underset{a'}{\max} \,\, q_*(s', a')   ]
\end{aligned}
$$
These equations are in principal solvable by any methods for solving nonlinear equations as we have $ n $ equations and $ n $ unknown and we know the dynamics of the environment. With an optimal $ v_* $ we can relatively easily deduce an optimal policy. For each state $ s $ we choose the action that maximizes the Bellman optimality equation. A policy that assigns nonzero probabilities to these actions is optimal. With $ q_* $ the agent does not have to search ahead for the optimal action, but can immediately pick the action that maximizes $ q_*(s,a) $.

# Dynamic programming
Dynamic programming algorithms are obtained by turning the Bellman equation into update rules to improve the value functions.
The problem of computing the state-value function  $ v_\pi $ for a policy $ \pi $ is called **policy evaluation** or the **prediction problem**.

$$
\begin{aligned}
v_\pi (s) &= \mathbb E_\pi [ G_t \mid S_t = s] \\
&= \sum_a \pi (a\mid s)  \sum_{s',r} p(s', r \mid s, a) \bigg [r + \gamma v_\pi (s') \bigg] \quad \forall s \in \mathcal S \\
\end{aligned}
$$
If we know the dynamics of the environment we can solve the equation above as a system of simultaneous linear equations. An iterative solution method is the following

$$
\begin{aligned}
v_\pi (s) &= \mathbb E_\pi [R_{t+1} + \gamma v_k (S_{t+1}) \mid S_t = s] \\
&= \sum_a \pi (a\mid s)  \sum_{s',r} p(s', r \mid s, a) \bigg [r + \gamma v_\pi (s') \bigg] \\
\end{aligned}
$$