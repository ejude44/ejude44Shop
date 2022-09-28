package com.ejude44Shop.ejude44Shop.entity;

import lombok.Data;


import javax.persistence.*;
import java.math.BigDecimal;


@Entity
@Table(name = "product")
@Data
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)

  @Column(name = "id")
  private Long id;


  @ManyToOne
  @JoinColumn(name = "category_id", nullable = false)
  private ProductCategory category;


  @Column(name = "name")
  private String name;

  @Column(name = "description")
  private String description;

  @Column(name = "price")
  private double price;

  @Column(name = "image_url")
  private String imageUrl;

}
