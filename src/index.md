---
layout: layout.njk
title: トップページ
description: サンプル株式会社の公式サイト
---

<section class="hero">
  <div class="hero-overlay">
    <div class="hero-inner">
      <h1>Crafting Trust Through Jewelry</h1>
      <p>世界の宝飾市場に向けて、確かな品質と技術を提供します。</p>
    </div>
  </div>
</section>

<section class="section intro">
  <div class="container">
    <h2 class="section-title">Our Philosophy</h2>
    <p class="section-text">
      私たちは長年にわたり宝飾品の輸入卸売および加工を手がけ、
      国内外の展示会に出展しながら業界とともに歩んできました。
      信頼される品質と、誠実な取引を第一に考えています。
    </p>
  </div>
</section>

<section class="section features">
  <div class="container grid-3">
    <div class="feature-card">
      <h3>In-house Workshop</h3>
      <p>熟練職人による自社工房での加工体制。</p>
    </div>
    <div class="feature-card">
      <h3>Global Sourcing</h3>
      <p>世界主要市場から厳選した宝石を直輸入。</p>
    </div>
    <div class="feature-card">
      <h3>Exhibition Presence</h3>
      <p>IJT・JJFなど主要展示会へ継続出展。</p>
    </div>
  </div>
</section>

<section class="section services bg-light">
  <div class="container">
    <h2 class="section-title">Services</h2>
    <div class="grid-2">
      <div>
        <h3>Wholesale</h3>
        <p>小売業者様向けの宝飾品卸売サービス。</p>
      </div>
      <div>
        <h3>Jewelry Processing</h3>
        <p>修理・リフォーム・オーダー加工にも対応。</p>
      </div>
    </div>
  </div>
</section>

<section class="section news">
  <div class="container">
    <h2 class="section-title">News</h2>
    <ul class="news-list">
      {% for post in collections.blog | reverse | slice(0,3) %}
        <li class="news-item">
          <a href="{{ post.url }}">
            <span class="news-date">
              {{ post.date }}
            </span>
            <span class="news-title">
              {{ post.data.title }}
            </span>
          </a>
        </li>
      {% endfor %}
    </ul>
    <div class="center">
      <a href="/blog/" class="btn-outline">View All</a>
    </div>
  </div>
</section>


<section class="section cta">
  <div class="container center">
    <h2>Business Partnership</h2>
    <p>お取引に関するお問い合わせはこちらから。</p>
    <a href="/contact/" class="btn-gold">Contact Us</a>
  </div>
</section>
