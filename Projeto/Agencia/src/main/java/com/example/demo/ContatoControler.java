package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:8081", maxAge=3600)
@RestController
@RequestMapping("/api")
@Configuration
public class ContatoControler {

	@Autowired
	ContatoRepository contatoRepository;

	@GetMapping("/contatos")
	public ResponseEntity<List<Contato>> getAllContatos(@RequestParam(required = false) String nome) {
		try {
			List<Contato> contatos = new ArrayList<Contato>();
			if (nome == null)
				contatoRepository.findAll().forEach(contatos::add);
			else
				contatoRepository.findByNomeContaining(nome).forEach(contatos::add);
			if (contatos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(contatos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/contatos/{id}")
	public ResponseEntity<Contato> getContatoById(@PathVariable("id") long id) {
		Optional<Contato> contatoData = contatoRepository.findById(id);
		if (contatoData.isPresent()) {
			return new ResponseEntity<>(contatoData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/salvar")
	public ResponseEntity<Contato> createContato(@RequestBody Contato contato) {
		try {
			Contato _contato = contatoRepository.save(new Contato(contato.getNome(), contato.getEmail(), false));
			return new ResponseEntity<>(_contato, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/editar/{id}")
	public ResponseEntity<Contato> updateContato(@PathVariable("id") long id, @RequestBody Contato contato) {
		Optional<Contato> contatoData = contatoRepository.findById(id);
		if (contatoData.isPresent()) {
			Contato _contato = contatoData.get();
			_contato.setNome(contato.getNome());
			_contato.setEmail(contato.getEmail());
			_contato.setPublicado(contato.isPublicado());
			return new ResponseEntity<>(contatoRepository.save(_contato), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deletar/{id}")
	public ResponseEntity<HttpStatus> deleteContato(@PathVariable("id") long id) {
		try {
			contatoRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@DeleteMapping("/deletar")
	public ResponseEntity<HttpStatus> deleteAllContatos() {
		try {
			contatoRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	@GetMapping("/contatos/publicados")
	public ResponseEntity<List<Contato>> findByPublicado() {
		try {
			List<Contato> contatos = contatoRepository.findByPublicado(true);
			if (contatos.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(contatos, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
