---

template: module-title
layout: false

# Simplify

---
layout: true
---
template: full-screen
background-image: url('images/heavy-cms.jpg')
class: inverse

???

your traditional cms functions like this

It does a ton of different things

And a lot of those things are useful

But a lot of them are unneeded for the site you're working on

---
template: full-screen
background-image: url('images/micro-cms.jpg')
class: inverse

???

so what if we did this with our content management system?

What if we broke it down into tiny services?

And we picked the tiny little boats that we needed for our specific website?

...

and we're going to do that 

with a whole lot of demos


---
template: tool
class: small-logo

![Eleventy logo](images/11ty.png)
## [11ty.io](11ty.io)

???

and we're going to start with a static site generator called eleventy

---
template: full-screen
background-image: url(/images/eleventy-diagram.jpg)

???

this is going to turn a bunch of markdown files into html

so we can serve up our site with static HTML

because our site doesn't really change that often

it doesn't need a back-end for every request

And as a bonus, static HTML is super fast

& cdn-ready

...

It's like a return to the 90s internet, but the tooling is so much better now

---
template: full-screen
background-image: url(/images/happy-dev.jpg)


???

and you'll see that this is a pretty developer-friendly way to manage content

but it's not really friendly to non-technical content-authors

---
template: tool

![Netlify CMS logo](images/netlify-cms.svg)
## [netlifycms.org](netlifycms.org)

???

so we're going to use a "CMS" that manages our static files

This will provide our non-technical content authors a nice UI

so they can contribute markdown to our static website

without realizing that they're contributing markdown.

---
class: bg-contain, no-footer
background-image: url(/images/netlify-cms-diagram.jpg)

---
template: full-screen
background-image: url(/images/happy-dev-author.jpg)

???

So now we've got two happy campers - the devs AND the content authors

---
template: tool

![Netlify logo](images/netlify.png)
## [netlify.com](netlify.com)

???

And then we're going to host it all on a hosting platform called Netlify

Which is a new player to the hosting game

Really focused on static websites augmented with JavaScript interactivity

And honestly, if you get one takeaway, it's going to be Netlify.

Netlify is FAST.

---
class: bg-contain, no-footer
background-image: url(/images/happy-dev-author-user.jpg)

???

And now we've got three happy campers.

Our users are happy, because the site is all static files

And it's hosted on a CDN

And it's fast as hell.

---

template: module-title
layout: false

# Act 2: Let's Do It!

???

As tone-loc would say, 

lezz do it

---
