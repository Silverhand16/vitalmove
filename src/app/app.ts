import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ItemAcordeon {
  titulo: string;
  subtitulo?: string;
  contenido?: string;
  puntos?: string[];
  abierto: boolean;
}

interface Valor {
  titulo: string;
  descripcion: string;
}

interface Objetivo {
  numero: number;
  texto: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  mostrarModal: boolean = false;

  formData = {
    nombre: '',
    telefono: '',
    email: '',
    terapia: 'Terapia Física',
    fecha: '',
    hora: '',
    caso: ''
  };

  valores: Valor[] = [
    {
      titulo: 'Empatía',
      descripcion: 'Escuchamos y comprendemos a cada persona, reconociendo sus necesidades y acompañándola con calidez en cada etapa de su proceso.'
    },
    {
      titulo: 'Profesionalismo',
      descripcion: 'Aplicamos tratamientos basados en evidencia y en una formación constante, garantizando una atención responsable y de calidad.'
    },
    {
      titulo: 'Compromiso',
      descripcion: 'Nos involucramos de lleno en la recuperación de cada paciente, trabajando con constancia para alcanzar los mejores resultados.'
    },
    {
      titulo: 'Calidez humana',
      descripcion: 'Creamos un ambiente cercano y respetuoso, donde cada persona se sienta segura, valorada y motivada durante su terapia.'
    }
  ];

  objetivos: Objetivo[] = [
    {
      numero: 1,
      texto: 'Ofrecer tratamientos personalizados que respondan a las necesidades, objetivos y capacidades de cada paciente.'
    },
    {
      numero: 2,
      texto: 'Promover la independencia funcional y mejorar la calidad de vida de las personas que atendemos.'
    },
    {
      numero: 3,
      texto: 'Mantener una formación continua y actualizada para brindar intervenciones seguras y eficaces.'
    },
    {
      numero: 4,
      texto: 'Contribuir a una comunidad más saludable a través de la prevención y la educación en salud.'
    }
  ];

  faqs: ItemAcordeon[] = [
    {
      titulo: '¿Cuándo deberías acudir a terapia física?',
      contenido: 'Conoce las señales que indican que necesitas una valoración profesional.\n\nMuchas molestias pasan desapercibidas y se convierten en lesiones cuando se ignoran. Considera una valoración si presentas:\n- Dolor que se mantiene más de una semana.\n- Dificultad para mover una articulación o cargar peso.\n- Pérdida de equilibrio o sensación de inseguridad al caminar.\n- Molestias que reaparecen después de una lesión previa.\n- Limitaciones para realizar tus actividades diarias o deportivas.',
      abierto: true
    },
    {
      titulo: '¿Qué es la fisioterapia?',
      contenido: 'Es una disciplina de la salud que estudia el movimiento del cuerpo para prevenir, tratar y rehabilitar lesiones y limitaciones funcionales.\n\nLa fisioterapia se enfoca en el movimiento del cuerpo humano. Su objetivo es prevenir, tratar y rehabilitar cualquier alteración de la movilidad o de la función física.',
      abierto: true
    },
    {
      titulo: 'Beneficios de la fisioterapia',
      contenido: 'Reduce el dolor, mejora la movilidad y devuelve la independencia en el día a día.\n\nLa fisioterapia no solo alivia el dolor: también mejora la calidad de vida. Estos son algunos de sus beneficios más importantes:\n- Disminuye el dolor de forma natural, sin depender solo de medicamentos.\n- Recupera la fuerza, la movilidad y el equilibrio.',
      abierto: false
    },
    {
      titulo: 'Terapias más comunes en nuestra clínica',
      contenido: 'Un resumen de los servicios que ofrecemos y en qué consiste cada uno.\n\nCombinamos varias técnicas según las necesidades de cada paciente:\n- Terapia física: ejercicios terapéuticos y técnicas manuales para recuperar movilidad y fuerza.',
      abierto: false
    }
  ];

  recursos: ItemAcordeon[] = [
    {
      titulo: 'Guía básica de terapia física',
      subtitulo: 'DOCUMENTO DE TEORÍA',
      puntos: [
        '1. Valoración inicial. Realizamos una entrevista y una exploración para identificar el origen del problema, tus objetivos y tus limitaciones.',
        '2. Planeación del tratamiento. Definimos metas a corto y mediano plazo y elegimos las técnicas más adecuadas para cada caso.',
        '3. Tratamiento. Combinamos ejercicios terapéuticos, técnicas manuales y educación del paciente durante las sesiones.',
        '4. Seguimiento. Evaluamos tu progreso y ajustamos el plan hasta lograr la recuperación completa.'
      ],
      abierto: true
    },
    {
      titulo: 'Ejercicios recomendados para el hogar',
      subtitulo: 'DOCUMENTO DE TEORÍA',
      puntos: [
        'Respeta el rango de movimiento que no te genere dolor.',
        'Realiza pocas repeticiones y aumenta de forma progresiva.',
        'Mantén una respiración constante y evita aguantarla.',
        'Detén el ejercicio si aparece dolor agudo y consulta a tu terapeuta.'
      ],
      abierto: true
    },
    {
      titulo: 'Cómo prepararte para tu primera cita',
      subtitulo: 'DOCUMENTO DE TEORÍA',
      puntos: [
        'Llevar ropa cómoda que permita moverte con libertad.',
        'Traer estudios o informes médicos previos, si los tienes.',
        'Anotar cuándo comenzó el dolor y qué lo empeora.',
        'Llegar unos minutos antes para completar tu ficha.'
      ],
      abierto: true
    }
  ];

  ngOnInit() {
    // Desactiva la memoria de scroll del navegador
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Limpia cualquier hash (#contacto) de la URL
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    // Fuerza el scroll al origen (arriba a la izquierda)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  toggleItem(item: ItemAcordeon) {
    item.abierto = !item.abierto;
  }

  onSubmit() {
    console.log('Solicitud enviada:', this.formData);
    alert('¡Gracias! Hemos recibido tu solicitud de cita.');
    this.cerrarModal();
  }
}