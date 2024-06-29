<script setup lang="ts">
  import Header from '@/components/template/Header.vue';
  import SectionTemplate from '@/components/template/SectionTemplate.vue';
</script>

<template>
    <Header 
        :title-one="'Find your'"
        :blue-text="'Managed Services'"
        :title-two="'with us'"
        :paragraph-text="'At Insight Collab Technologies (ICT), LLC, our Managed Services are designed to provide your organization with comprehensive, proactive IT support and management, ensuring that your communication systems remain robust, secure, and efficient. Our team of IT professionals specializes in Unified Communications (UC), offering a range of services that cater to the unique needs of your business.'"
        :button-text="'Call to action'"
        :imageFolder="'managed-services'"
        :imageName="'managed.png'"
    />

    <SectionTemplate 
      :cards="[
        {
          imageFolder: 'managed-services',
          imageName: 'proactiveMonitoring.jpg',
          header: 'Proactive Monitoring and Maintenance',
          text: 'We utilize advanced monitoring tools to keep a vigilant eye on your UC systems 24/7. This proactive approach allows us to detect and resolve potential issues before they impact your operations, ensuring optimal performance and minimal downtime.',
          position: 'left'
        },
        {
            imageFolder: 'managed-services',
            imageName: 'systemAdministration.jpg',
            header: 'System Administration and Support',
            text: 'Our experienced administrators manage all aspects of your UC environment, from user account management to configuration changes. We provide 24/7 support, ensuring that any issues are addressed promptly and efficiently.',
            position: 'right'
        },
        {
            imageFolder: 'managed-services',
            imageName: 'securityManagement.jpg',
            header: 'Security Management.',
            text: 'Security is a top priority at ICT. We implement and manage robust security measures, including firewalls, intrusion detection systems, and encryption protocols. Regular security audits and vulnerability assessments help us keep your systems protected against emerging threats.',
            position: 'left'
        },
        {
            imageFolder: 'managed-services',
            imageName: 'update.jpg',
            header: 'Software Updates and Patch Management',
            text: 'Keeping your systems up-to-date is crucial for security and performance. Our managed services include regular software updates and patch management, ensuring that your UC solutions are always running the latest versions with the newest features and security enhancements.',
            position: 'right'
        },
        {
            imageFolder: 'managed-services',
            imageName: 'backup.jpg',
            header: 'Backup and Disaster Recovery',
            text: 'We provide comprehensive backup and disaster recovery solutions to protect your data and ensure business continuity. Our services include regular data backups, secure storage, and a detailed disaster recovery plan to minimize downtime in the event of an unexpected disruption.',
            position: 'left'
        },
        {
            imageFolder: 'managed-services',
            imageName: 'performance.jpg',
            header: 'Performance Optimization',
            text: 'Our team continually monitors and optimizes your UC systems to enhance performance. We analyze system metrics, identify bottlenecks, and implement improvements to ensure your communication infrastructure operates at peak efficiency.',
            position: 'right'
        },
        {
            imageFolder: 'managed-services',
            imageName: 'management.jpg',
            header: 'Vendor Management',
            text: 'We handle all interactions with UC vendors on your behalf, from procurement to support and maintenance. This ensures that you receive the best possible service and support from your technology partners.',
            position: 'left'
        },
        {
            imageFolder: 'managed-services',
            imageName: 'reports.jpg',
            header: 'Reporting and Analytics',
            text: 'We provide detailed reports and analytics on the performance and health of your UC systems. These insights help you make informed decisions and identify areas for improvement, ensuring that your technology investments deliver maximum value.',
            position: 'right'
        },
        {
            imageFolder: 'managed-services',
            imageName: 'service.jpg',
            header: 'Customizable Service Packages',
            text: 'Our managed services are tailored to meet the specific needs of your organization. Whether you require comprehensive support or specific services, we offer flexible packages that align with your business goals and budget.',
            position: 'left'
        },
        {
            imageFolder: 'managed-services',
            imageName: 'account.jpg',
            header: 'Dedicated Account Management',
            text: 'Every client is assigned a dedicated account manager who serves as your primary point of contact. Your account manager ensures that your needs are met and coordinates all services, providing personalized support and attention.',
            position: 'right'
        }
      ]"
    />

</template>

<style scoped></style>