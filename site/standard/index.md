# Zero Information Casualty

*A summary. The full specification is published at zeroinformationcasualty.org.*

Canonical page: https://charli-jo.com/standard/

Zero Information Casualty (ZIC) is a web design specification. A ZIC site is one where nobody, whether reading directly, using assistive technology, or sending an agent, loses access to public meaning because of how the site is built, admitted or delivered.

The full specification lives at its own home: [read Zero Information Casualty v1.7 at zeroinformationcasualty.org](https://zeroinformationcasualty.org/). It is licensed under CC BY-SA 4.0, by C J Tyrer and Claude (Anthropic).

## The four questions

ZIC asks four questions of any page:

1.  Can they read it?
2.  Is the person's reader allowed in?
3.  Did it actually arrive?
4.  Did it survive being read?

## The four casualties

Each question has a matching way that information is lost:

- **Rendering:** meaning was encoded somewhere the reader could not decode it, such as in colour or an image alone.
- **Admission:** a person was denied information because the reader they sent was turned away.
- **Delivery:** the reader was welcome, but the document never arrived.
- **Reconstruction:** the document was read, silently misunderstood, and the person was told the result with confidence.

## The sent agent

The case ZIC is built around is the sent agent. When a person asks an agent to fetch public information for them, that agent is their way in. Refusing it is refusing them. ZIC therefore requires sites to serve every agent acting on a person's present request, while keeping search indexing and model training as separate decisions that each publisher makes for themselves.

## Where it fits in my practice

ZIC is the information standard beneath the other two pieces of work. [Universal Digital Involvement](/principle/) is the principle that services should be open to all people and the agents they send. [Agent-First Accessible Service Design](/method/) is the method for building those services. ZIC makes sure that what a service publishes reaches every reader intact. I use it to build and audit sites, including this one.

## This site

charli-jo.com is built to ZIC v1.7. The [accessibility statement](/accessibility/) explains how, and what is published for agents.
