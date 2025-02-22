package rocks.hbwc.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rocks.hbwc.backend.models.Wrestler;
import rocks.hbwc.backend.repos.WrestlerRepository;

import java.util.List;

/**
 * @author ksdon
 **/
@RestController
@RequestMapping("/api/wrestlers")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend requests
public class WrestlerController {
    @Autowired
    private final WrestlerRepository wrestlerRepository;

    public WrestlerController(WrestlerRepository wrestlerRepository) {
        this.wrestlerRepository = wrestlerRepository;
    }

    @GetMapping
    public List<Wrestler> getAllWrestlers() {
        return wrestlerRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Wrestler> getWrestlerById(@PathVariable Long id) {
        return wrestlerRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Wrestler addWrestler(@RequestBody Wrestler wrestler) {
        return wrestlerRepository.save(wrestler);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Wrestler> updateWrestler(@PathVariable Long id, @RequestBody Wrestler updatedWrestler) {
        return wrestlerRepository.findById(id)
                .map(existingWrestler -> {
                    existingWrestler.setFirst_name(updatedWrestler.getFirst_name());
                    existingWrestler.setLast_name(updatedWrestler.getLast_name());
                    existingWrestler.setEmail(updatedWrestler.getEmail());
                    existingWrestler.setSchool(updatedWrestler.getSchool());
                    existingWrestler.setUsa_number(updatedWrestler.getUsa_number());
                    existingWrestler.setGender(updatedWrestler.getGender());
                    existingWrestler.setImage_url(updatedWrestler.getImage_url());
                    existingWrestler.setDescription(updatedWrestler.getDescription());
                    existingWrestler.setBirthdate(updatedWrestler.getBirthdate());
                    existingWrestler.setPhoneNumber(updatedWrestler.getPhoneNumber());

                    return ResponseEntity.ok(wrestlerRepository.save(existingWrestler));
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}

