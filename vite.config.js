import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import css from '@vitejs/plugin-css'; 


export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                
                'resources/views/themes/TokoFurnio/assets/css/main.css',
                'resources/views/themes/TokoFurnio/assets/plugins/jqueryui/jquery-ui.css',
                'resources/views/themes/TokoFurnio/assets/js/main.js',
                'resources/views/themes/TokoFurnio/assets/plugins/jqueryui/jquery-ui.min.js',

                // Path Relatif untuk file di folder livewire/admin
                'resources/views/livewire/admin/assets/css/tabler.min.css',
                'resources/views/livewire/admin/assets/css/tabler-flags.min.css', // Hapus query string
                'resources/views/livewire/admin/assets/css/tabler-payments.min.css', // Hapus query string
                'resources/views/livewire/admin/assets/css/tabler-vendors.min.css', // Hapus query string

                'resources/views/livewire/admin/assets/js/demo-theme.min.js', // Hapus query string
                'resources/views/livewire/admin/assets/libs/apexcharts/dist/apexcharts.min.js',
                'resources/views/livewire/admin/assets/libs/jsvectormap/dist/js/jsvectormap.min.js',
                'resources/views/livewire/admin/assets/libs/jsvectormap/dist/maps/world.js',
                'resources/views/livewire/admin/assets/libs/jsvectormap/dist/maps/world-merc.js',
                'resources/views/livewire/admin/assets/js/tabler.min.js',
                    ],
            refresh: true,
        }),
    ],
});
