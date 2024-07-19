### mặc định

```css
body {
    font-family: Noto Sans JP, san-serif;
    color: #000;
    font-weight: 400;
    line-height: 1.6;
}
```

### run scss

```
cd css
sass --watch styles.scss:styles.css
```

> [!TIP]
> xem chi tiết ở dưới

<details>
<summary>container</summary>
xem thêm ở /css/base/container.scss

```css
.container {
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
}

.container_fluid {
    padding: 0 20px;
}
```

</details>
<details>
<summary>font-family</summary>
xem thêm ở /css/mixins/fonts/font-family.scss

```css
.class-name {
    @extend %ff-[noto, roboto, poppins, ...];
}
```

|             extend | css                                              |
| -----------------: | ------------------------------------------------ |
|   @extend %ff-noto | font-family: Noto Sans JP, sans-serif !important |
| @extend %ff-roboto | font-family: Roboto, sans-serif !important       |

</details>

<details>
<summary>font-size</summary>
xem thêm ở /css/mixins/fonts/font-size.scss

```css
.class-name {
    @extend %fz-[14, 16, 18, ...];
}
```

|         extend | css                                                              |
| -------------: | ---------------------------------------------------------------- |
| @extend %fz-14 | font-size: 1.2rem<br>@media min-width (768px): font-size: 1.4rem |
| @extend %fz-16 | font-size: 1.4rem<br>@media min-width (768px): font-size: 1.6rem |
| @extend %fz-20 | font-size: 1.6rem<br>@media min-width (768px): font-size: 2rem   |

bảng hạ font

| size ở PC | size ở SP |     |     | size ở PC | size ở SP |
| --------: | --------- | --- | --- | --------- | --------- |
|     10~12 | 10        |     |     | 101~110   | 38        |
|     13~15 | 12        |     |     | 111~120   | 40        |
|     16~18 | 14        |     |     | 121~130   | 42        |
|     19~22 | 16        |     |     | 131~140   | 44        |
|     23~29 | 18        |     |     | 141~160   | 46        |
|     30~34 | 20        |     |     | 161~180   | 48        |
|     35~39 | 22        |     |     | 181~200   | 50        |
|     40~44 | 24        |     |     | 201~220   | 52        |
|     45~49 | 26        |     |     | 221~240   | 54        |
|     50~60 | 28        |     |     | 241~260   | 56        |
|     61~70 | 30        |     |     | 261~280   | 58        |
|     71~80 | 32        |     |     | 281~300   | 60        |
|     81~90 | 34        |     |     | 301~350   | 70        |
|    91~100 | 36        |     |     | 351~400   | 80        |

</details>

<details>
<summary>font-weight</summary>
xem thêm ở css/mixins/fonts/font-weight.scss

```css
.class-name {
    @extend %fw-[100, 200, ..., 900];
}
```

|          extend | css              |
| --------------: | ---------------- |
| @extend %fw-100 | font-weight: 100 |
| @extend %fw-200 | font-weight: 200 |
| @extend %fw-300 | font-weight: 300 |

</details>

<details>
<summary>letter-spacing</summary>
xem thêm ở css/mixins/letter-spacing.scss

```css
.class-name {
    @extend %lts-[-100, 0, 100, ...];
}
```

|            extend | css                    |
| ----------------: | ---------------------- |
| @extend %lts--100 | letter-spacing: -0.1em |
|    @extend %lts-0 | letter-spacing: 0      |
|  @extend %lts-100 | letter-spacing: 0.1em  |

</details>

<details>
<summary>text-align</summary>
xem thêm ở css/mixins/text.scss

```css
.class-name {
    @extend %txt-[left-center-right];
    @extend %[md, lg, xl, xxl]-txt-[left, center, right];
}
```

|                 extend | css                                          |
| ---------------------: | -------------------------------------------- |
|      @extend %txt-left | text-align: left                             |
|     @extend %txt-right | text-align: right                            |
|    @extend %txt-center | text-align: center                           |
| @extend %md-txt-center | @media min-width (768px): text-align: center |
|  @extend %lg-txt-right | @media min-width (992px): text-align: right  |

</details>

<details>
<summary>font-feature-settings</summary>
xem thêm ở css/mixins/text.scss

```css
.class-name {
    @extend %txt-palt;
}
```

|            extend | css                           |
| ----------------: | ----------------------------- |
| @extend %txt-palt | font-feature-settings: "palt" |

</details>

<details>
<summary>text for tel-phone</summary>
xem thêm ở css/mixins/text.scss

```css
.class-name {
    @extend %txt-phone;
}
```

|             extend | css                                            |
| -----------------: | ---------------------------------------------- |
| @extend %txt-phone | @media min-width (768px): pointer-events: none |

</details>

<details>
<summary>animate</summary>
xem thêm ở /assets/scss/foundation/_f_animate.scss

```html
<div class="js_ani fadeup">
    <!-- code here -->
</div>
<div class="js_ani fadeleft">
    <!-- code here -->
</div>
<div class="js_ani fadedown">
    <!-- code here -->
</div>
<div class="js_ani faderight">
    <!-- code here -->
</div>
<div class="js_ani scaleup">
    <!-- code here -->
</div>
<div class="js_ani scaledown">
    <!-- code here -->
</div>
<div class="js_ani slidebar">
    <div class="slidebar_inside">
        <!-- code here -->
    </div>
</div>
<figure class="js_ani slidebar">
    <img class="slidebar_inside" src="" alt="" />
</figure>
```

</details>
