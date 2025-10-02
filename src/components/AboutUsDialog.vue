<script setup>
const props = defineProps({
  show: Boolean
})
const emit = defineEmits(['close'])
</script>
<template>
    <div 
    v-if="props.show" 
    class="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    @click.self="emit('close')"
  >
    <div class="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 h-fit w-[650px] gap-5">
      <!-- slot lets parent put content -->
      <div class="flex justify-between w-full">
        <h1 class="text-xl text-black font-bold text-start">About Us</h1>
        <i class="pi pi-times cursor-pointer rounded-full h-fit w-fit" @close="toggleDropdown" style="font-size: 1.3rem; color: gray;"></i>
      </div>
      <div class="text-sm text-black leading-relaxed text-justify space-y-4">
        <p>
          At <b>Popules.com,</b> we believe that communities thrive when people connect, share, and grow together. 
          Our platform is designed to bring individuals, groups, and organizations closer—through meaningful conversations, 
          shared passions, and collective experiences.
        </p>

        <p>
          Founded with the vision of creating a safe, engaging, and people-first digital space, 
          <b>Popules.com</b> empowers users to express themselves authentically while discovering 
          new opportunities to connect with others.
        </p>

        <h2 class="font-bold">Our Values</h2>
        <ul class="list-disc pl-5 space-y-1">
          <li><b>Authenticity</b> — Real voices, real people, real connections.</li>
          <li><b>Safety</b> — Tools and policies that ensure a secure and respectful environment.</li>
          <li><b>Empowerment</b> — Features that give users control over their content and privacy.</li>
          <li><b>Growth</b> — Opportunities for personal, social, and professional development.</li>
        </ul>

        <p>
          At <b>Popules.com,</b> you’re not just a user — you’re part of a growing community that values your voice.  
          Join us and be part of the conversation. Together, let’s make social media truly social again.
        </p>
      </div>

    </div>
  </div>
</template>