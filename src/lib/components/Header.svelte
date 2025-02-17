<script>
	import { goto } from "$app/navigation";
    import Logo from "../assets/logo.png";
    import Sidebar from "./Sidebar.svelte";
    import { isLoggedIn } from '$lib/store.js';
  
    function handleLogout() {
      isLoggedIn.set(false);
      goto("/login");
    }
  </script>
  
  <div class="navbar bg-base-100 shadow-sm md:px-12 z-10">
    <div class="flex-1">
     <button><Sidebar /></button>
      <img
        class="btn btn-ghost text-sm md:text-xl"
        src={Logo}
        alt="Company Logo"
      />
    </div>
  
    {#if $isLoggedIn}
      <div class="flex gap-2">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                alt="User Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabindex="-1"
            role="menu"
            id="menu"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li role="menuitem">
              <button>
                Profile <span class="badge">New</span>
              </button>
            </li>
            <li role="menuitem"><button>Settings</button></li>
            <li role="menuitem">
              <button onclick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    {:else}
      <button onclick={()=> goto("/login")} class="btn btn-soft">Login</button>
    {/if}
  </div>
  