---
template: module-title

# A History Of The Web

???

So let's start with a brief history of the internet.

And the best way to talk about history

is to visit it.

---
template: image
class: delorean

![Delorean](images/delorean.png)

???

We'll climb into our time-traveling delorean


---
template: full-screen
class: no-footer
background-image: url(images/time-circuits.jpg)

???

set our time circuits back about 20 years

---
template: 88mph

???

When this baby hits 88 mph, I'm going to need your help.

This doesn't work without sound.

I need you all to make sound effects.

---
template: module-title

# The "Before" Time

???

we'll come out in the "Before" time.

And we'll take a look around, in search of the internet.

---
template: full-screen
class: no-footer
background-image: url(images/hot-topic.jpg)

???

We'll probably have to walk past hot topic to find it

---
template: full-screen
class: no-footer
background-image: url(images/reel-big-fish.jpg)

???

and OH MY GOSH! look out for RBF!

...

But here, I ...I think I see it.

Here it is, the internet 20 years ago:

---
class: no-footer
template: image

![Geocities](images/geocities.gif)

???

It was built on static HTML

CSS

A ton of blink and marquee tags

And it was probably hosted on geocities.

---
template: full-screen
class: no-footer
background-image: url(images/piles-of-files.jpg)

???

And it was hard to maintain all of those static files.

Things got messy pretty quickly.

So since we're developers, ...

---
template: module-title

# Dynamic back-ends

???

we built dynamic back-ends.

We started with scripting languages

---
template: framework

![PHP](images/php.png)
![ASP](images/aspclassic.png)

???

like PHP and asp...

And those were good

---
template: framework

![ASP.NET](images/asp-net.png)
![Rails](images/rails.jpg)
![NodeJS](images/nodejs.png)

???

Then we built fuller, better frameworks

like asp.net....

And those were great

they made developers lives easier

----eliminated a lot of copy and paste

but it was still the dev’s job to manage the content


---
template: framework

![WordPress](images/wordpress.jpg)
![Drupal](images/drupal.png)
![Umbraco](images/umbraco.png)

???

so we built cms's....

with gui’s for content editing

---
template: image

![Marketing Friend](images/drawings/marketing.png)
???

so now our friends in marketing could manage the site

and this was great, because

it freed us up to do things we want to do

---
template: image
class: no-footer
restart-animation: images/dinojump.gif
name: dino-jump-2

![Dino Jump](images/dinojump.gif)

???

like turning on airplane mode

and playing dino dash

---
template: 88mph

???

we jump back in our time travelling delorean

we'll need our sound effects again

or else we'll be stuck in 1997 listening to "sell out" on repeat for the rest of our days

and we'll come back to present day

and we step out and look around, and...

---
template: full-screen
class: no-footer
background-image: url(images/reel-big-fish.jpg)

???

UGH, COME ON

you're still around????!!!

just ignore them - they'll go away.

---
template: image

![Bootstrap](images/bootstrap.jpg)

???

as we look around, we realize the internet now looks like this - 

it's bootstrap

if you're fancy, you'll change a couple colors

---
template: image

![WordPress](images/wordpress-admin.jpg)

???

and behind the scenes, a lot of them look like this

the wordpress admin

if you've ever self-hosted wordpress, 


---
template: image

![Mauled by a bear](images/bear.jpg)

???

you know that some days feel like this

---
template: module-title

# How did we get here?

???

---

layout: true
template: soliloquy

# The Allure Of The Dynamic CMS

.col.col-5.profile[
![Fabio](images/fabio-2.jpg)
{{content}}
]

---

???

Who can blame us?

Fabio comes riding in on horseback

Long hair flowing in the wind

Nearly shirtless

Representing the dynamic CMS

And he tells us....

---

## "I'm so easy to set up."


???

---

## "I'm simple enough for anyone to use."

???

Anyone can use my admin

---

## "Any other way would be a maintenance nightmare."

???

And he harkens back to our good old days

Of GeoCities and blink tags and scrolling marquees

And he reminds how difficult it was to maintain static content back then

---

## "That's just how you do it."

???

And eventually we've heard his arguments so many times

that we just go on autopilot.

...

But today...

---
layout: true
template: soliloquy
name: johnny-five

# A Hero Rises!

{{content}}
.profile[
  ![Supercat](images/supercat-2.jpg)
]

---

???

A hero rises.

for the record - this hero is named supercat...

And she has some questions for us.

---

## "Are we using the right tool?"

???

Supercat wants to know if we are

using the right tool to build our sites.

---

## "Is your content truly dynamic?"

???

she wants to know if our content is as dynamic

as we think it is.

If every user sees the same thing,

isn't that really static content?

---

## "How often does your content change?"

???

And if the content doesn't change that frequently,

why do we need to drive it dynamically?

---

## "Is a dynamic site worth the cost of support?"

???

And one other question she asks is rarely thought about

until you realize you've spent 4 mornings this month trying to get the site back up.

---
layout: true
template: facts

# Surprising Numbers

---

???

And she shows us some surprising numbers.

---

## 32%

### of websites on the internet run on WordPress

.footnote[
[http://stevenhicks.me/wordpress-runs-25-percent](http://stevenhicks.me/wordpress-runs-25-percent)
]
???

And when I started doing this talk a year and a half ago, it was 25%

So it is growing

---

## 70%

### of WordPress installs are vulnerable

.footnote[
[http://stevenhicks.me/wordpress-vulnerabilities](http://stevenhicks.me/wordpress-vulnerabilities)
]

???

XSS

SQL injection

CSRF

---

## 20%

### of the top 50 WordPress plugins are vulnerable

.footnote[
[http://stevenhicks.me/wordpress-vulnerabilities](http://stevenhicks.me/wordpress-vulnerabilities)
]

???

one of the great things about wordpress is the plugin ecosystem

there are a ton of them

unfortunately, many of them are vulnerable to the same types of attacks

the scariest part about vulnerable plugins is that you don’t know

	if the developer even knows it’s vulnerable,

	or when they’ll fix it,

	or if they even know how.

---
template: johnny-five

## "There is a better way."

???

And our hero looks back at us

And she says "there is a better way."
