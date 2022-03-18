package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contatos")
public class Contato {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column(name = "nome")
	private String nome;
	@Column(name = "email")
	private String email;
	@Column(name = "publicado")
	private boolean publicado;
	
	
	public Contato() {
	}


	public Contato(String nome, String email, boolean publicado) {
		super();
		this.nome = nome;
		this.email = email;
		this.publicado = publicado;
	}



	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public boolean isPublicado() {
		return publicado;
	}


	public void setPublicado(boolean publicado) {
		this.publicado = publicado;
	}
	

}
