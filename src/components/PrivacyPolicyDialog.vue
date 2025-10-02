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
    <div class="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 h-fit max-h-[500px] w-[650px] gap-5 ">
      <!-- slot lets parent put content -->
      <div class="flex justify-between w-full">
        <h1 class="text-xl text-black font-bold text-start">Privacy Policy</h1>
        <i class="pi pi-times cursor-pointer rounded-full h-fit w-fit" @click="$emit('close')" style="font-size: 1.3rem; color: gray;"></i>
      </div>
      <div class="text-sm text-black leading-relaxed text-justify overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] space-y-4">
  <p><b>Last Updated:</b> July 18, 2025</p>

  <p>
    Welcome to <b>popules.com</b>! We are committed to protecting your privacy and providing you with a safe and enjoyable social experience. 
    This Privacy Policy explains how <b>popules.com</b> ("we," "us," or "our") collects, uses, discloses, and protects information about you 
    when you use our website, mobile applications, and other online products and services (collectively, the "Services").
  </p>

  <p>
    By accessing or using our Services, you agree to the terms of this Privacy Policy. 
    If you do not agree, please do not access or use our Services.
  </p>

  <!-- Section 1 -->
  <h2 class="font-bold">1. Information We Collect</h2>
  <p>We collect information about you in various ways when you use our Services.</p>

  <ol class="list-decimal pl-5 space-y-2">
    <li>
      <b>Information You Provide Directly to Us</b>
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Account Information:</b> Name, email, password, date of birth, gender, profile picture.</li>
        <li><b>Profile Information:</b> Biography, interests, location, links to social profiles.</li>
        <li><b>Content You Create:</b> Posts, photos, videos, audio, comments, messages.</li>
        <li><b>Communications:</b> Customer support inquiries or user interactions.</li>
        <li><b>Survey & Contest Information:</b> Info you provide when participating.</li>
        <li><b>Payment Information:</b> Credit card or other payment details (via secure third-party processors).</li>
      </ul>
    </li>

    <li>
      <b>Information We Collect Automatically</b>
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Usage Information:</b> Features used, content viewed, searches, interactions, session details.</li>
        <li><b>Log Data:</b> IP address, browser type, date/time, interactions with Services.</li>
        <li><b>Device Information:</b> Device model, OS version, identifiers, network info.</li>
        <li><b>Location Information:</b> GPS, Wi-Fi, or IP-based location (with consent).</li>
        <li><b>Cookies & Tracking:</b> For usage insights and personalized experience.</li>
      </ul>
    </li>

    <li>
      <b>Information From Third Parties</b>
      <ul class="list-disc pl-5 space-y-1">
        <li><b>Social Media Integrations:</b> Public profile and friends list (based on your settings).</li>
        <li><b>Partners & Service Providers:</b> Info from advertisers, analytics, and service providers.</li>
      </ul>
    </li>
  </ol>

  <!-- Section 2 -->
  <h2 class="font-bold">2. How We Use Your Information</h2>
  <ul class="list-disc pl-5 space-y-1">
    <li>Provide, maintain, and improve our Services.</li>
    <li>Personalize your experience and show relevant ads.</li>
    <li>Communicate with you (updates, alerts, support).</li>
    <li>Enable social interactions and content sharing.</li>
    <li>Develop new features, products, and services.</li>
    <li>Analyze and improve user experience.</li>
    <li>Deliver targeted marketing campaigns.</li>
    <li>Ensure security, detect and prevent fraud.</li>
    <li>Comply with legal obligations.</li>
  </ul>

  <!-- Section 3 -->
  <h2 class="font-bold">3. How We Share Your Information</h2>
  <ul class="list-disc pl-5 space-y-1">
    <li><b>Other Users:</b> Public profile, posts, messages.</li>
    <li><b>Service Providers:</b> Hosting, payments, analytics, support.</li>
    <li><b>Business Partners:</b> Promotions, co-branded services.</li>
    <li><b>Advertisers & Ad Networks:</b> Aggregated or anonymized data.</li>
    <li><b>Legal & Law Enforcement:</b> As required by law.</li>
    <li><b>Corporate Transactions:</b> Mergers, acquisitions, reorganizations.</li>
    <li><b>With Your Consent:</b> Explicitly approved sharing.</li>
  </ul>

  <!-- Section 4 -->
  <h2 class="font-bold">4. Your Choices and Controls</h2>
  <ul class="list-disc pl-5 space-y-1">
    <li>Update account & privacy settings.</li>
    <li>Control visibility of your profile and posts.</li>
    <li>Manage communication preferences.</li>
    <li>Disable location services.</li>
    <li>Manage cookies in browser settings.</li>
    <li>Request access, updates, or deletion of your data.</li>
  </ul>

  <!-- Section 5 -->
  <h2 class="font-bold">5. Data Retention</h2>
  <p>We retain data as long as necessary for services, legal compliance, and business purposes, then delete or anonymize it.</p>

  <!-- Section 6 -->
  <h2 class="font-bold">6. Security</h2>
  <p>We implement technical and organizational safeguards, but no system is 100% secure.</p>

  <!-- Section 7 -->
  <h2 class="font-bold">7. Children's Privacy</h2>
  <p>Our Services are not intended for children under 13/16 (depending on applicable law). If collected, we delete such data immediately.</p>

  <!-- Section 8 -->
  <h2 class="font-bold">8. International Data Transfers</h2>
  <p>Your information may be transferred to countries with different data protection laws. Safeguards are applied.</p>

  <!-- Section 9 -->
  <h2 class="font-bold">9. Changes to This Policy</h2>
  <p>We may update this policy and will notify you of significant changes. Check periodically for updates.</p>

  <!-- Section 10 -->
  <h2 class="font-bold">10. Contact Us</h2>
  <p>
    Popules.com <br />
    <a href="mailto:legal@popules.com" class="text-blue-600 underline">legal@popules.com</a>
  </p>
</div>

    </div>
  </div>
</template>