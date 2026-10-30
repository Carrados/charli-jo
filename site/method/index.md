# Agent-First Accessible Service Design

*An introduction to the method by Charli-Jo Tyrer. Version 1.0, October 2026.*

Canonical page: https://charli-jo.com/method/

## Contents

1.  [What is Agent-First Accessible Service Design?](#what-is-agent-first-accessible-service-design)
2.  [Why a new approach is needed](#why-a-new-approach-is-needed)
3.  [Returning to systems analysis](#returning-to-systems-analysis)
4.  [The intention and the outcome](#the-intention-and-the-outcome)
5.  [The Completion Chain](#the-completion-chain)
6.  [Agents on both sides of the service](#agents-on-both-sides-of-the-service)
7.  [Authority, evidence and trust](#authority-evidence-and-trust)
8.  [How the method works](#how-the-method-works)
9.  [From prototype to working service](#from-prototype-to-working-service)
10. [Migration without reproducing the old system](#migration-without-reproducing-the-old-system)
11. [What makes the method different?](#what-makes-the-method-different)
12. [Questions for further work](#questions-for-further-work)
13. [The underlying principle](#the-underlying-principle)

## What is Agent-First Accessible Service Design?

Agent-First Accessible Service Design is a method for understanding, designing and building services that people can use independently, either directly or through AI agents they choose to authorise. It combines established systems analysis with accessibility practice, AI-assisted development and the emerging possibilities of agent-mediated services.

The starting point is not a website, an application or a technology platform. It is the relationship between what people want to achieve and what an organisation is capable of doing for them. The method examines an organisation from the outside, reconstructs the services, information, processes and rules behind its existing interfaces, and develops a model of what those services should do. We then turn that model into a working implementation, which is tested against real human intentions and outcomes.

> *Understand the service before building the system.*

## Why a new approach is needed

For most of the web’s history, the page has been the organising unit of digital service design. Organisations arrange information into pages, build navigation menus around them and provide forms through which people request services or complete transactions. Accessibility work has largely followed the same structure, examining pages, controls and interactions to establish whether disabled people can perceive, understand and operate them.

That work remains essential, and WCAG provides a necessary baseline for accessible interfaces. But an accessible collection of pages is not necessarily an accessible service. Someone can navigate every page of a website with a screen reader and still be unable to work out which service meets their needs, how to apply, whether an application has succeeded or what to do when something goes wrong.

AI agents make this distinction pressing. Instead of navigating a website themselves, a person might simply say to an agent, “Help me find the technology training I need to get back into work.” The agent must then understand the intention, discover relevant services, establish eligibility, explain the options and perhaps help complete an application. The organisation’s services therefore have to be understandable beyond the particular pages, menus and forms through which they happen to be presented.

This does not make human interfaces redundant. It means the underlying service must be designed independently of them. Agent-first does not mean agent-only. It means designing a service whose meaning, capabilities, rules and evidence are available to people directly and, where they choose, to the agents acting on their behalf.

## Returning to systems analysis

The method deliberately revives disciplines I practised as a systems analyst, before the modern web and contemporary AI existed. Three ideas from that tradition do most of the work.

### SSADM: the logical and the physical

The Structured Systems Analysis and Design Method (SSADM) drew a central distinction between the physical system, meaning how something is currently implemented, and the logical system, meaning what it does independently of that implementation. It moved through four views:

| **View**          | **Question**                               |
|-------------------|--------------------------------------------|
| Current physical  | What exists now?                           |
| Current logical   | What does the existing system actually do? |
| Required logical  | What should the system do?                 |
| Required physical | How should the new system be implemented?  |

These distinctions matter even more in the age of AI coding agents. A website’s navigation menu tells us how somebody once decided to organise information. It doesn’t necessarily describe the organisation, its services or the intentions of the people who use them. Rebuilding the existing pages with newer technology can simply reproduce the same conceptual limitations, only faster. Instead, the method reconstructs the organisation’s logical services from the evidence available, then designs a required logical system around human intentions and outcomes. Existing technology informs the investigation and constrains implementation where necessary, but it does not dictate the service model.

### Jackson Structured Programming: structure follows structure

Michael Jackson’s principle was that a program’s structure should mirror the structure of the data it processes. This method applies the same principle one level up: a service’s structure should mirror the structure of the intentions it serves. If people come with five distinct purposes, the service should be shaped around five purposes, not around whatever pages an organisation happened to publish.

### Entity life histories: knowing where things stand

SSADM modelled how each significant thing in a system changes over time. An application, a booking or an enquiry moves through states such as received, under review, needing more information, accepted or closed. Many failures in agent-mediated services are really missing life histories. Nothing tells the person or their agent what state something is in, so the agent reports success it cannot evidence. Making those states explicit and visible is the origin of the Evidence link in the Completion Chain.

## The intention and the outcome

The method distinguishes between what someone wants and what the service can demonstrably help them achieve. An intention might be: “I want to become more confident using technology.” That may need clarification. Does the person want to use a smartphone, learn workplace software, improve their accessibility skills or become more independent? The service should help them explore those possibilities without silently deciding what they ought to want.

An outcome might be: “The person has identified a suitable training course, understood its requirements and successfully enrolled.” An agent can complete a series of actions without fulfilling the original intention, and an organisation can deliver a service correctly without achieving everything the person hoped for. Designing around intentions and verifiable outcomes makes these gaps explicit. It also requires the service to describe its boundaries: what the organisation can provide, what lies outside its responsibilities, and when a person needs another source of help.

## The Completion Chain

At the centre of the method is a six-part model of accessible service completion:

**Intention → Understanding → Authorisation → Action → Evidence → Correction**

Every link is an accessibility requirement.

| **Link**      | **The question to test**                                                                                                           |
|---------------|------------------------------------------------------------------------------------------------------------------------------------|
| Intention     | Can the person express what they want to achieve, including uncertainty or ambiguity?                                              |
| Understanding | Can they discover and understand the available options, requirements and consequences?                                             |
| Authorisation | Can they decide what should happen and, where appropriate, give an agent permission to act within clear limits?                    |
| Action        | Can the task actually be completed, either directly or through authorised delegation?                                              |
| Evidence      | Can the person establish what happened, rather than relying on an unsupported assertion of success?                                |
| Correction    | Can they change their mind, correct an error, withdraw permission, reverse an action where possible or find an appropriate remedy? |

An individual page might satisfy WCAG while the wider service fails at one or more of these links. The Completion Chain therefore complements conventional accessibility testing rather than replacing it. It tests whether a service is accessible from the expression of an intention through to a demonstrable result.

## Agents on both sides of the service

The method considers two distinct uses of AI agents. The first is agent-assisted service construction, in which coding and analysis agents help investigate existing systems, reconstruct service models, build implementations, find accessibility barriers and make corrections. The second is agent-mediated service use, in which a person’s authorised agent helps them discover, understand and interact with services.

These are separate capabilities and must be evaluated separately. An agent’s ability to build an accessible website does not prove that another agent can use the resulting service effectively. Nor does successful agent-mediated interaction prove that the service works for a person using a screen reader without an agent. The method therefore requires three complementary forms of accessibility:

- **Direct human accessibility:** people can use the service independently, including with assistive technologies, with WCAG conformance as the baseline.

- **Agent-mediated accessibility:** authorised agents can discover relevant information, understand permitted actions and interact with the service reliably.

- **Human control:** people remain able to understand, direct, verify and correct what happens on their behalf.

None is a substitute for the others.

## Authority, evidence and trust

An agent-first service must distinguish between what an agent can technically do and what it is authorised to do. A person might authorise an agent to search for training opportunities, but not to disclose personal information or submit an application without confirmation. Permissions must be limited, understandable and withdrawable.

Services must also provide reliable evidence of actions and outcomes. An agent saying “Your application has been submitted” is not evidence that the receiving organisation has accepted it. The service needs to expose meaningful states, confirmations and, where appropriate, references that establish what has happened. Actions should also be classified by whether they can be cancelled, reversed, corrected or only remedied after the event.

Privacy and data minimisation are built into the logical design. An agent should not need to disclose someone’s disability, personal circumstances or membership details merely to discover what services are available. None of this can be left entirely to coding agents. It requires organisational decisions, human judgement and appropriate governance.

## How the method works

The method has six activities. They draw on the four SSADM views but allow continuous revision rather than a rigid sequence of approvals.

### 1. Observe the current physical system

Examine the publicly available service from the outside: its information, navigation, forms, transactions, contact routes, terminology and apparent organisational responsibilities. Access to administrative systems or source code is not needed at this stage.

### 2. Reconstruct the current logical system

Determine what the organisation actually offers, which processes exist, what information moves between them and which rules govern them. Record each finding as an established fact, a reasonable inference or a question only the organisation can answer.

### 3. Model intentions and outcomes

Identify what people come to the organisation to achieve: their intentions, possible interpretations, desired outcomes, constraints and the boundaries of the organisation’s responsibilities. Consider both people acting directly and people choosing to delegate particular activities.

### 4. Specify the required logical system

Design the services independently of any interface or platform. Model information, processes, permissions, life histories and states, evidence, privacy requirements and routes for correction. Apply the Completion Chain to each significant service journey.

### 5. Build with agents

Use AI development agents to create a working physical implementation from the logical model, with accessible human interfaces and appropriate machine-readable descriptions of service capabilities and permitted actions. Keep experimentation separate from production systems, with security, privacy, change control and human oversight.

### 6. Evaluate complete tasks

Test whether people can achieve defined outcomes, including assistive technology testing, agent-mediated interactions, verification of completed actions and recovery from errors. Failures feed back into the logical model as well as the implementation.

A working prototype may expose an incorrect assumption about a service, and testing may reveal that an intended outcome was poorly defined. The model is revised accordingly.

## From prototype to working service

AI agents make it possible to move from a logical model to a working prototype very quickly. That speed is valuable, but a convincing prototype is not a dependable service. The method distinguishes three levels of achievement:

| **Level**          | **What it means**                                                                                                              |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Model demonstrated | A working prototype shows how the proposed service could operate.                                                              |
| Service validated  | Representative users have completed defined tasks, including direct assistive technology and agent-mediated journeys.          |
| Production ready   | Accessibility, security, privacy, governance, operations, maintenance and service continuity requirements have been addressed. |

These levels stop the speed of AI-generated implementation from being mistaken for evidence of readiness. The ambition is to build quickly enough that ideas are tested against working systems, while keeping the discipline needed to deploy them responsibly.

## Migration without reproducing the old system

Reconstructing the existing website also produces a content inventory, a URL map and a record of uncertainties that need organisational confirmation. These support a separate migration process, much as SSADM treated data conversion as its own piece of work. Existing content must be accounted for, published links and bookmarks should keep working through redirects, and member information, live transactions, legal obligations and operational dependencies need careful treatment.

Migration constraints should be understood early, but they must not turn the new logical design into a reproduction of the existing website. The objective is continuity of service without continuity of unnecessary limitations.

## What makes the method different?

None of the individual ingredients is entirely new. Systems analysis has long distinguished logical systems from physical implementations. Accessibility practice has long required inclusive interaction and meaningful user testing. Service design has long examined user needs, journeys and outcomes.

What has changed is the practical relationship between analysis, implementation and use. AI agents can now help reconstruct systems, implement designs and make revisions at a speed that changes the economics of development, while other agents increasingly act as intermediaries between people and organisations. The method brings these developments together while keeping human intention, understanding and control at the centre. It does not assume that an agent should always be used, or that technology can decide what a person ought to want. It asks what a service must make understandable, possible and verifiable for people to exercise meaningful choice.

## Questions for further work

Version 1.0 establishes the method. These questions are where it most needs testing and collaboration:

- How should a service describe its intentions and capabilities so that both people and agents can discover them, without creating another hidden layer that only developers understand?

- What is the minimum evidence an agent should obtain before telling someone that an action has succeeded?

- How can a small charity express delegated authority in plain language that its trustees can actually approve?

- Which parts of the method transfer to organisations that are not themselves accessibility specialists?

## The underlying principle

A coding agent can implement a misunderstanding in an afternoon. As implementation gets faster, the scarce skill is the ability to understand what should be built, why it should exist and what would count as evidence that it works. Agent-First Accessible Service Design puts that understanding before implementation. It treats accessibility not simply as a property of pages or controls, but as a property of the relationship between human intentions and achievable outcomes.

The purpose is not to make people adapt to systems, or to make agents indispensable. It is to design services that people can understand, direct and use on their own terms, with or without an agent.
