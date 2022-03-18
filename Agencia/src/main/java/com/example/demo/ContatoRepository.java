package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato, Long> {
	  List<Contato> findByPublicado(boolean publicado);
	  List<Contato> findByNomeContaining(String nome);
	}
