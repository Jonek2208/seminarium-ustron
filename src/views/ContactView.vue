<template>
    <SectionTemplate title="Kontakt">
        <div class="lg:columns-2 justify-self-center">
            <div class="">
                <h2 class="mt-2 text-lg leading-8 text-gray-600">Seminarium Teologiczne w Ustroniu</h2>
                <dl class="mt-10 text-base leading-7 text-gray-600 space-y-4">
                    <div class="flex gap-x-4">
                        <dt class="flex-[0_0_auto]"><span class="sr-only">Address</span>
                            <BuildingLibraryIcon class="w-6 h-7 align-middle text-gray-400" />
                        </dt>
                        <dd>ul. Daszyńskiego 75<br>43-450 Ustroń</dd>
                    </div>
                    <div class="flex gap-x-4">
                        <dt class="flex-[0_0_auto]"><span class="sr-only">Telephone</span>
                            <PhoneIcon class="w-6 h-7 align-middle text-gray-400" />
                        </dt>
                        <dd><a class="" href="tel:+48 606 336 912">+48 606 336 912</a></dd>
                    </div>
                    <div class="flex gap-x-4">
                        <dt class="flex-[0_0_auto]"><span class="sr-only">Email</span>
                            <EnvelopeIcon class="w-6 h-7 align-middle text-gray-400" />
                        </dt>
                        <dd><a class="" href="mailto:semteolustron@interia.pl">semteolustron@interia.pl</a></dd>
                    </div>
                    <div class="flex gap-x-4">
                        <dt class="flex-[0_0_auto]"><span class="sr-only">Numer konta</span>
                            <BanknotesIcon class="w-6 h-7 align-middle text-gray-400" />
                        </dt>
                        <dd>29 8129 0004 2001 0017 7614 0001 <br /> Bank Spółdzielczy w Ustroniu
                        </dd>
                    </div>
                </dl>
            </div>
            <div class="p-2 h-96">
                <iframe class="self-center"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354.09637698871927!2d18.8044978474978!3d49.73011528349221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47141c7b3f82f717%3A0x376d0d225fcdf527!2zS2_Fm2Npw7PFgiBaaWVsb25vxZt3acSFdGtvd3kgWmLDs3IgQmV0ZWw!5e0!3m2!1spl!2spl!4v1696982168172!5m2!1spl!2spl"
                    width="100%" height="100%" style="border:0;" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </SectionTemplate>
</template>
  
<script setup lang="ts">
import SectionTemplate from '@/components/SectionTemplate.vue';
import {
    BuildingLibraryIcon,
    PhoneIcon,
    EnvelopeIcon,
    BanknotesIcon
} from '@heroicons/vue/24/outline'
</script>