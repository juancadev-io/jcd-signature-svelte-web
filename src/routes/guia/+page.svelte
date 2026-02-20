<svelte:head>
	<title>Guia de uso - Signature Generator</title>
	<meta
		name="description"
		content="Guia para usar el generador de firmas: requisitos, pasos, recomendaciones y flujo tecnico en Svelte."
	/>
</svelte:head>

<main class="mx-auto max-w-5xl px-6 py-10">
	<header class="mb-8 rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-sky-50 p-6">
		<p class="text-xs font-semibold tracking-wide text-indigo-600 uppercase">Documentacion</p>
		<h1 class="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">Guia de uso del generador de firmas</h1>
		<p class="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
			Esta guia explica que debes tener en cuenta para crear firmas consistentes, exportarlas bien y
			entender como esta construida la app en SvelteKit.
		</p>
		<div class="mt-4">
			<a
				href="/"
				class="inline-flex rounded-lg border border-indigo-200 px-3 py-1.5 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-100"
			>
				Volver al generador
			</a>
		</div>
	</header>

	<section class="mb-8 rounded-2xl border border-gray-200 bg-white p-6">
		<h2 class="text-lg font-semibold text-gray-900">1. Requisitos y contexto</h2>
		<ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
			<li>Navegador moderno (Chrome, Edge, Firefox o Safari).</li>
			<li>Datos de la persona: nombre, cargo, empresa, telefono, correo y enlaces sociales.</li>
			<li>
				Imagenes optimizadas para avatar/logo (idealmente cuadradas y livianas para evitar firmas
				pesadas).
			</li>
			<li>Validar branding: colores, tipografia y estilo segun la identidad de la marca.</li>
		</ul>
	</section>

	<section class="mb-8 rounded-2xl border border-gray-200 bg-white p-6">
		<h2 class="text-lg font-semibold text-gray-900">2. Flujo recomendado de uso</h2>
		<ol class="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-700">
			<li>Completa la informacion base en las secciones Personal y Contact.</li>
			<li>Agrega redes solo si son necesarias para mantener la firma limpia.</li>
			<li>Define plantilla, estilo, fuente y colores en la seccion Design.</li>
			<li>Activa opciones extra (CTA o disclaimer) si tu equipo de marca las requiere.</li>
			<li>Revisa la vista previa y exporta en HTML o PNG segun el cliente de correo.</li>
			<li>Guarda un JSON para reutilizar la configuracion mas adelante.</li>
		</ol>
	</section>

	<section class="mb-8 rounded-2xl border border-gray-200 bg-white p-6">
		<h2 class="text-lg font-semibold text-gray-900">3. Que tener en cuenta antes de exportar</h2>
		<ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
			<li>
				HTML: ideal para Gmail y Outlook web. Haz una prueba enviando un correo real antes de
				distribuir.
			</li>
			<li>PNG: util en clientes moviles o cuando el cliente de correo rompe estilos HTML.</li>
			<li>
				Tamano: evita imagenes grandes y demasiados enlaces para no afectar carga ni entregabilidad.
			</li>
			<li>
				Accesibilidad: usa contraste suficiente entre texto y fondo para mejorar lectura.
			</li>
			<li>
				Consistencia: define una configuracion base por equipo y compartela via JSON.
			</li>
		</ul>
	</section>

	<section class="rounded-2xl border border-gray-200 bg-white p-6">
		<h2 class="text-lg font-semibold text-gray-900">4. Como funciona internamente en Svelte</h2>
		<ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
			<li>
				La pagina principal vive en <code>src/routes/+page.svelte</code> y compone panel de
				formulario, preview y exportacion.
			</li>
			<li>
				El estado global se maneja con <code>signatureStore</code>, que sincroniza los datos del
				formulario y la vista previa en tiempo real.
			</li>
			<li>
				Las plantillas estan en <code>src/lib/components/Templates</code> y se renderizan segun la
				configuracion activa.
			</li>
			<li>
				La exportacion HTML/PNG y la carga/descarga de JSON se centraliza en
				<code>ExportPanel</code> y utilidades de <code>src/lib/utils</code>.
			</li>
		</ul>
	</section>
</main>
