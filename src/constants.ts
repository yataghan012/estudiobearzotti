import { Project, Service } from './types';

// Import assets from new location
import logo from './assets/images/logo.png';
import logo2 from './assets/images/logo2.png';
import project1 from './assets/images/project-1.jpg';
import project2 from './assets/images/project-2.jpg';
import project3 from './assets/images/project-3.jpg';
import project4 from './assets/images/project-4.jpg';
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cafetería del Pópolo',
    category: 'Comercial / Hito Urbano',
    description: 'Resolución de un ángulo urbano complejo mediante una experiencia vertical de tres niveles que actúa como faro en la ciudad. Plástica escultórica y capital visual integrados.',
    location: 'Córdoba, Argentina',
    year: '2024',
    area: '150 m²',
    images: [project1, 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000'],
    featured: true,
    technicalDetails: {
      materials: ['Hormigón visto', 'Metal', 'Vidrio'],
      client: 'Privado',
      status: 'Finalizado'
    },
    process: {
      sketch: 'https://picsum.photos/seed/bearzotti1/1920/1080?grayscale',
      final: project1,
      description: 'La verticalidad y resolución plástica del espacio urbano define este hito contemporáneo.'
    }
  },
  {
    id: '2',
    title: 'Edificio Niveles',
    category: 'Residencial / Vanguardia',
    description: 'Uso innovador de niveles y superficies de apoyo interior/exterior. Una exploración de la materialidad, la forma y la reflexión funcional.',
    location: 'Córdoba, Argentina',
    year: '2023',
    area: '2.400 m²',
    images: [project2, 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'],
    process: {
      sketch: 'https://picsum.photos/seed/bearzotti2/1920/1080?grayscale',
      final: project2,
      description: 'Arquitectura que se convierte en un espacio para la contemplación.'
    }
  },
  {
    id: '3',
    title: 'Portal Brutalista',
    category: 'Institucional',
    description: 'Hito arquitectónico que dialoga con el paisaje urbano a través de la elegancia brutalista. Integración de mobiliario urbano fijo en hormigón y metal.',
    location: 'Córdoba, Argentina',
    year: '2023',
    area: '1.200 m²',
    images: [project3, 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=2000'],
    technicalDetails: {
      materials: ['Hormigón esculpido', 'Acero corten'],
      client: 'Privado',
      status: 'Finalizado'
    }
  },
  {
    id: '4',
    title: 'Residencia en Pendiente',
    category: 'Residencial',
    description: 'Resolviendo lo imposible: vivienda unifamiliar en un sitio de alta complejidad topográfica, privilegiando vistas y plástica formal.',
    location: 'Manantiales, Córdoba',
    year: '2022',
    area: '380 m²',
    images: [project4],
    featured: true
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    number: '01',
    title: 'Arquitectura de Vanguardia',
    description: 'Diseño de hitos urbanos y proyectos de alta visibilidad que transforman el paisaje de la ciudad.'
  },
  {
    id: '2',
    number: '02',
    title: 'Plástica Escultórica',
    description: 'Exploración de la forma y la materia para crear espacios icónicos con una fuerte identidad visual.'
  },
  {
    id: '3',
    number: '03',
    title: 'Resolución de Sitios Complejos',
    description: 'Especialistas en terrenos difíciles, ángulos agudos y topografías desafiantes donde otros ven límites.'
  },
  {
    id: '4',
    number: '04',
    title: 'Mobiliario Urbano Integrado',
    description: 'Diseño de equipamiento fijo en hormigón y metal que desdibuja la línea entre lo privado y lo público.'
  }
];
