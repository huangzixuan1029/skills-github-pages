---
title: 博客文章
layout: post-list

---

<div class="post-categories">
  <div class="card category-card">
    <h2>编程笔记</h2>
    <p>这里是我分享编程学习过程中的笔记和心得。</p>
    <a href="#programming" class="button">查看编程笔记</a>
  </div>


  <div class="card category-card">
    <h2>英语学习</h2>
    <p>这里是我分享英语学习过程中的笔记和心得。</p>
    <a href="#english" class="button">查看英语笔记</a>
  </div>


  <div class="card category-card">
    <h2>生活日记</h2>
    <p>这里是我分享生活中的点滴和感悟。</p>
    <a href="#diary" class="button">查看生活日记</a>
  </div>

</div>

<div class="featured-posts">
  <h2>精选文章</h2>
  <div class="post-grid">
    {% for post in site.posts limit:3 %}
    <div class="card post-card">
      <div class="post-card-content">
        <h3 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <div class="post-meta">
          <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          {% if post.tags %}
          <div class="post-tags">
            {% for tag in post.tags limit:3 %}
            <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
        <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">阅读更多 <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
    {% endfor %}
  </div>
</div> 
