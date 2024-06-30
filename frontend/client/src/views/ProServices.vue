<script setup lang="ts">
import Header from '@/components/template/Header.vue';
import SectionTemplate from '@/components/template/SectionTemplate.vue';
import OurVision from '@/components/template/OurVision.vue';
</script>

<template>
    <div>
        <Header :title-one="'Find your'" :blue-text="'Professional Services'" :title-two="'with us'"
            :paragraph-text="'At Insight Collab Technologies (ICT), LLC, we offer comprehensive professional services designed to elevate your organization\'s communications infrastructure. Our team of seasoned IT professionals specializes in Unified Communications (UC), delivering tailored solutions that enhance stability, security, and performance.'"
            :button-text="'Call to action'" :imageFolder="'pro-services'" :imageName="'proServices.png'" />

    </div>

    <SectionTemplate :cards="[
        {
            imageFolder: 'pro-services',
            imageName: 'communication.jpg',
            header: 'Unified Communications Strategy and Planning',
            text: 'Our experts work closely with your team to develop a robust UC strategy that aligns with your business objectives. We assess your current infrastructure, identify gaps, and design a roadmap to ensure seamless integration and scalability.',
            position: 'left'
        },
        {
            imageFolder: 'pro-services',
            imageName: 'integration.jpg',
            header: 'Implementation and Integration',
            text: 'We handle the end-to-end implementation of UC systems, ensuring smooth integration with your existing technology stack. Our meticulous approach minimizes downtime and disruption, enabling your organization to transition effortlessly.',
            position: 'right'
        },
        {
            imageFolder: 'pro-services',
            imageName: 'securityCompliance.jpg',
            header: 'Security and Compliance.',
            text: 'Security is at the core of our services. We conduct thorough security assessments, implement advanced encryption protocols, and ensure compliance with industry standards to protect your communication systems from threats and vulnerabilities.',
            position: 'left'
        },
        {
            imageFolder: 'pro-services',
            imageName: 'performanceTuning.jpg',
            header: 'System Optimization and Performance Tuning',
            text: 'Our team continuously monitors and optimizes your UC environment to enhance performance. We identify and resolve bottlenecks, ensuring your systems operate at peak efficiency.',
            position: 'right'
        },
        {
            imageFolder: 'pro-services',
            imageName: 'maintenance.jpg',
            header: 'Maintenance and Support',
            text: 'We offer ongoing maintenance and support services to keep your UC systems running smoothly. Our proactive approach includes regular updates, patch management, and 24/7 support to address any issues promptly.',
            position: 'left'
        },
        {
            imageFolder: 'pro-services',
            imageName: 'solution.jpg',
            header: 'Custom Solutions and Enhancements',
            text: 'We provide bespoke solutions tailored to your unique needs. Whether it\’s developing custom applications, enhancing existing functionalities, or integrating third-party tools, our team delivers solutions that drive value and innovation.',
            position: 'right'
        },
        {
            imageFolder: 'pro-services',
            imageName: 'training.jpg',
            header: 'Training and Knowledge Transfer',
            text: 'Empower your team with the knowledge and skills to maximize the benefits of your UC systems. We offer comprehensive training programs and documentation to ensure your staff can effectively manage and utilize your communications infrastructure.',
            position: 'left'
        },
        {
            imageFolder: 'pro-services',
            imageName: 'projectManagement.jpg',
            header: 'Project Management',
            text: 'Our experienced project managers oversee every aspect of your UC projects, from planning to execution. We ensure projects are delivered on time, within budget, and to your exact specifications.',
            position: 'right'
        },
    ]" />
    <OurVision
        :text="'By choosing ICT, you benefit from our extensive experience, commitment to quality, and a customer-centric approach that ensures your success in achieving superior communication capabilities.'" />
</template>

<style scoped></style>