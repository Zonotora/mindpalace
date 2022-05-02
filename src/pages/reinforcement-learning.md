---
slug: /reinforcement-learning
tags: ["wip"]
lastModified: 2022-05-02
created: 2022-04-28
title: Reinforcement Learning
header: [{"depth":1,"name":"Notation","link":"Notation"},{"depth":1,"name":"Finite Markov Decision Processes","link":"Finite-Markov-Decision-Processes"},{"depth":2,"name":"Rewards","link":"Rewards"}]
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
| Discount | |

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


## Rewards
Defining rewards for an environment could be hard. The reward is the signal communicated to the agent so that the agent are able to learn and optimize its goal. We should not define sub-goals as they tend to make the agent lose interest of its real goal. That is, we should define **what** we want the agent to achieve, and not **how** we want the agent to achieve it.
To be more formal we define the **expected return**.
$$
G_t = R_{t+1} + R_{t+2} + \dots + R_{t+T}
$$

which makes sense in applications with an actual final time step $ T $.