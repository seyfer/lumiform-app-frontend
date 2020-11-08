<template>
  <section class="hero is-fullheight">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <router-link :to="{ name: 'home' }" class="navbar-item">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQHpB-px4oYL-Q/company-logo_200_200/0?e=2159024400&v=beta&t=e4f6DmZg1v2DY8UcsnKMsSRFiL4cU4XQ8keJXgBAxWE"
                alt="Logo"
              />
            </router-link>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <transition
          enter-active-class="animated animated--fast fadeIn"
          leave-active-class="animated animated--fast fadeOut"
          mode="out-in"
        >
          <router-view></router-view>
        </transition>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li :class="$route.name === 'home' ? 'is-active' : ''">
              <router-link class="is-uppercase" :to="{name: 'home'}">Home</router-link>
            </li>
            <li :class="$route.name === 'credentials' ? 'is-active' : ''">
              <router-link
                class="is-uppercase"
                :to="{name: 'credentials'}"
              >
                Start New Game
              </router-link>
            </li>
            <li :class="$route.name === 'results' ? 'is-active' : ''">
              <router-link class="is-uppercase" :to="{name: 'results'}">Results</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>
