<script>
  import Home from "../assets/home.png";
  import Dashboard from "../assets/dashboard.png";
  import Profile from "../assets/profile-user.png";
  import Settings from "../assets/settings.png";
  import { isDrawerOpen } from "../store.js";
</script>

<div class="drawer">
  <input
    id="my-drawer"
    type="checkbox"
    class="drawer-toggle"
    bind:checked={$isDrawerOpen}
  />

  <div class="drawer-content">
    <label for="my-drawer" class="btn btn-circle swap swap-rotate">
      <!-- Hamburger Icon -->
      <svg
        class="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path
          d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
        />
      </svg>

      <!-- Close Icon -->
      <svg
        class="swap-on fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <polygon
          points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
        />
      </svg>
    </label>
  </div>

  <div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>

    <ul
      class="menu bg-base-200 text-base-content min-h-full pt-14 w-full sm:w-64 p-4 space-y-4"
    >
      <li>
        <a href="/" class="flex items-center gap-4 text-lg">
          <img src={Home} alt="Home Icon" class="w-5 h-5 filter invert" />
          Home
        </a>
      </li>

      <li>
        <a href="/" class="flex items-center gap-4 text-lg">
          <img src={Dashboard} alt="Dashboard Icon" class="w-5 h-5 filter invert" />
          Dashboard
        </a>
      </li>

      <li>
        <a href="/" class="flex items-center gap-4 text-lg">
          <img src={Profile} alt="Profile Icon" class="w-5 h-5 filter invert" />
          Profile
        </a>
      </li>

      <li>
        <a href="/" class="flex items-center gap-4 text-lg">
          <img src={Settings} alt="Settings Icon" class="w-5 h-5 filter invert" />
          Settings
        </a>
      </li>
    </ul>
  </div>
</div>

<style>
  .drawer-overlay {
    background-color: transparent !important;
  }

  .drawer-side {
    top: 4rem;
    height: calc(100vh - 4rem);
    overflow-y: auto;
    position: fixed;
    z-index: 50; /* Ensure drawer is above everything */
  }

 

  
</style>
